import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import * as Icons from "lucide-react";

export const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("service_cards")
        .select("*")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services?.map((service) => {
            const IconComponent = Icons[service.icon_name as keyof typeof Icons];
            return (
              <div
                key={service.id}
                className="p-6 rounded-lg bg-secondary border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="text-primary mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button variant="default" size="lg">
              See All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};