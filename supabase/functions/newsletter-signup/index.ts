import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    // Create Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    // Insert subscriber
    const { data: subscriber, error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }])
      .select()
      .single();

    if (insertError) {
      if (insertError.code === "23505") { // unique_violation
        return new Response(
          JSON.stringify({ error: "You're already subscribed!" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      throw insertError;
    }

    // Generate confirmation token (subscriber id in this case)
    const confirmationUrl = `${req.headers.get("origin")}/confirm-newsletter?token=${subscriber.id}`;

    // Send confirmation email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "WireLab Newsletter <newsletter@wirelab.co>",
        to: [email],
        subject: "Confirm your newsletter subscription",
        html: `
          <h2>Welcome to WireLab Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter. Please click the button below to confirm your subscription:</p>
          <a href="${confirmationUrl}" style="display: inline-block; background-color: #FF5733; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0;">
            Confirm Subscription
          </a>
          <p>If you didn't request this subscription, you can safely ignore this email.</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error("Failed to send confirmation email");
    }

    return new Response(
      JSON.stringify({ message: "Please check your email to confirm your subscription" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process subscription" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);