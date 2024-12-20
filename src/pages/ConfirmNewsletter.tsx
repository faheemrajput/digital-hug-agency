import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, XCircle } from "lucide-react";

const ConfirmNewsletter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const confirmSubscription = async () => {
      const token = searchParams.get("token");
      
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        const response = await supabase.functions.invoke("confirm-newsletter", {
          body: { token },
        });

        if (response.error) throw response.error;
        
        setStatus("success");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (error) {
        console.error("Confirmation error:", error);
        setStatus("error");
      }
    };

    confirmSubscription();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {status === "loading" && (
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 mx-auto" />
            <div className="h-4 bg-primary/20 rounded w-3/4 mx-auto" />
          </div>
        )}
        
        {status === "success" && (
          <div className="space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold text-foreground">Subscription Confirmed!</h1>
            <p className="text-foreground/70">
              Thank you for confirming your subscription. You'll be redirected to the homepage in a few seconds.
            </p>
          </div>
        )}
        
        {status === "error" && (
          <div className="space-y-4">
            <XCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h1 className="text-2xl font-bold text-foreground">Confirmation Failed</h1>
            <p className="text-foreground/70">
              We couldn't confirm your subscription. Please try subscribing again.
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-primary hover:text-primary/80"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmNewsletter;