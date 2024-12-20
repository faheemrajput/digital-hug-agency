import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please provide a valid email address.");
    }

    // Initialize Supabase client
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
      } else {
        // Resend confirmation email
        const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
        const confirmationUrl = `${req.headers.get("origin")}/confirm-newsletter?token=${existingSubscriber.id}`;

        await resend.emails.send({
          from: "WireLab <newsletter@wirelab.com>",
          to: email,
          subject: "Confirm your newsletter subscription",
          html: `
            <h2>Welcome to WireLab Newsletter!</h2>
            <p>Please click the link below to confirm your subscription:</p>
            <a href="${confirmationUrl}">Confirm Subscription</a>
            <p>If you didn't request this, you can safely ignore this email.</p>
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
    }

    // Create new subscriber
    const { data: newSubscriber, error: insertError } = await supabaseClient
      .from("newsletter_subscribers")
      .insert([{ email }])
      .select()
      .single();

    if (insertError) throw insertError;

    // Send confirmation email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const confirmationUrl = `${req.headers.get("origin")}/confirm-newsletter?token=${newSubscriber.id}`;

    await resend.emails.send({
      from: "WireLab <newsletter@wirelab.com>",
      to: email,
      subject: "Confirm your newsletter subscription",
      html: `
        <h2>Welcome to WireLab Newsletter!</h2>
        <p>Please click the link below to confirm your subscription:</p>
        <a href="${confirmationUrl}">Confirm Subscription</a>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Please check your email to confirm your subscription." }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});