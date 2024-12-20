import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { token } = await req.json();
    console.log("Newsletter confirmation request received for token:", token);

    if (!token) {
      throw new Error("Invalid confirmation token.");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get subscriber details and update confirmation status
    const { data: subscriber, error: selectError } = await supabaseClient
      .from("newsletter_subscribers")
      .select()
      .eq("id", token)
      .single();

    if (selectError || !subscriber) {
      console.error("Error finding subscriber:", selectError);
      throw new Error("Invalid confirmation token or subscriber not found.");
    }

    if (subscriber.confirmed) {
      return new Response(
        JSON.stringify({ message: "Email already confirmed!" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    const { error: updateError } = await supabaseClient
      .from("newsletter_subscribers")
      .update({ confirmed: true })
      .eq("id", token);

    if (updateError) {
      console.error("Error updating subscriber:", updateError);
      throw updateError;
    }

    // Send welcome email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    console.log("Sending welcome email to:", subscriber.email);
    
    await resend.emails.send({
      from: "WireLab Newsletter <newsletter@wirelab.com>",
      to: [subscriber.email],
      subject: "Welcome to WireLab Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5733;">Welcome to WireLab Newsletter!</h2>
          <p>Thank you for confirming your subscription. You're now officially part of our community!</p>
          <p>You'll start receiving our updates, news, and special offers directly to your inbox.</p>
          <p style="color: #666;">If you have any questions, feel free to reach out to us.</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email confirmed successfully!" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error in confirm-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});