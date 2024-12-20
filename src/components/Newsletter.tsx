import { useState } from "react";
import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterProps {
  isPopup?: boolean;
  onSuccess?: () => void;
}

export const Newsletter = ({ isPopup, onSuccess }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await supabase.functions.invoke("newsletter-signup", {
        body: { email },
      });

      if (response.error) throw response.error;

      toast({
        title: "Success!",
        description: "Please check your email to confirm your subscription.",
      });
      setEmail("");
      onSuccess?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isPopup) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-foreground/70">
          Get the latest updates, news, and special offers delivered directly to your inbox.
        </p>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 bg-background/50 border-primary/10 focus:border-primary/30"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            {isLoading ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe Now
                <Mail className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
        <p className="text-sm text-foreground/50">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </form>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5" />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl -right-32 top-0" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-primary/5 blur-3xl -left-32 bottom-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="block text-foreground">Stay Updated with</span>
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
              Our Newsletter
            </span>
          </h2>
          
          <p className="text-lg text-foreground/70">
            Get the latest updates, news, and special offers delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background/50 border-primary/10 focus:border-primary/30"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              {isLoading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Mail className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-foreground/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};