import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const ConfirmNewsletter = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const confirmSubscription = async () => {
      try {
        const token = searchParams.get("token");
        if (!token) throw new Error("Invalid confirmation link.");

        const response = await supabase.functions.invoke("confirm-newsletter", {
          body: { token },
        });

        if (response.error) throw response.error;

        setStatus("success");
        setMessage("Your subscription has been confirmed! Thank you for subscribing to our newsletter.");
      } catch (error: any) {
        setStatus("error");
        setMessage(error.message || "Something went wrong. Please try again.");
      }
    };

    confirmSubscription();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {status === "loading" && (
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold">Confirming your subscription...</h2>
          </div>
        )}
        
        {status === "success" && (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Subscription Confirmed!</h2>
            <p className="text-foreground/70">{message}</p>
            <a
              href="/"
              className="inline-block mt-4 text-primary hover:text-primary/80"
            >
              Return to Homepage
            </a>
          </div>
        )}
        
        {status === "error" && (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Oops!</h2>
            <p className="text-foreground/70">{message}</p>
            <a
              href="/"
              className="inline-block mt-4 text-primary hover:text-primary/80"
            >
              Return to Homepage
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmNewsletter;