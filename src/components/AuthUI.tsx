import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

export const AuthUI = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card rounded-lg shadow-lg">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: 'hsl(var(--primary))',
                brandAccent: 'hsl(var(--primary))',
              },
            },
          },
        }}
        providers={["google"]}
        redirectTo={`${window.location.origin}/auth/callback`}
      />
    </div>
  );
};