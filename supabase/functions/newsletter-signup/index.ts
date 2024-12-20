import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    console.log("Newsletter signup request received for email:", email);
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please provide a valid email address.");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if email already exists
    const { data: existingSubscriber } = await supabaseClient
      .from("newsletter_subscribers")
      .select()
      .eq("email", email)
      .single();

    if (existingSubscriber) {
      if (existingSubscriber.confirmed) {
        throw new Error("This email is already subscribed to our newsletter.");
      }
      // Resend confirmation email for unconfirmed subscription
      const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
      const confirmationUrl = `${req.headers.get("origin")}/confirm-newsletter?token=${existingSubscriber.id}`;
      
      console.log("Resending confirmation email to:", email);
      await resend.emails.send({
        from: "WireLab Newsletter <newsletter@wirelab.com>",
        to: [email],
        subject: "Confirm your newsletter subscription",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #FF5733;">Welcome to WireLab Newsletter!</h2>
            <p>Thank you for your interest in our newsletter. Please click the button below to confirm your subscription:</p>
            <a href="${confirmationUrl}" style="display: inline-block; background-color: #FF5733; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 16px 0;">Confirm Subscription</a>
            <p style="color: #666;">If you didn't request this, you can safely ignore this email.</p>
          </div>
        `,
      });

      return new Response(
        JSON.stringify({ message: "Confirmation email resent." }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Create new subscriber
    const { data: newSubscriber, error: insertError } = await supabaseClient
      .from("newsletter_subscribers")
      .insert([{ email }])
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting new subscriber:", insertError);
      throw insertError;
    }

    // Send confirmation email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const confirmationUrl = `${req.headers.get("origin")}/confirm-newsletter?token=${newSubscriber.id}`;
    
    console.log("Sending confirmation email to new subscriber:", email);
    await resend.emails.send({
      from: "WireLab Newsletter <newsletter@wirelab.com>",
      to: [email],
      subject: "Confirm your newsletter subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5733;">Welcome to WireLab Newsletter!</h2>
          <p>Thank you for your interest in our newsletter. Please click the button below to confirm your subscription:</p>
          <a href="${confirmationUrl}" style="display: inline-block; background-color: #FF5733; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 16px 0;">Confirm Subscription</a>
          <p style="color: #666;">If you didn't request this, you can safely ignore this email.</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Please check your email to confirm your subscription." }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error in newsletter-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});