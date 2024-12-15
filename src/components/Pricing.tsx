import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Website Development",
        "Basic SEO Setup",
        "Social Media Integration",
        "Mobile Responsive Design",
        "3 Months Support"
      ]
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses needing comprehensive solutions",
      features: [
        "Advanced Website Development",
        "Complete SEO Optimization",
        "Social Media Strategy",
        "E-commerce Integration",
        "Custom Analytics Dashboard",
        "12 Months Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale organizations",
      features: [
        "Full-Scale Digital Transformation",
        "Custom Software Development",
        "Advanced Security Features",
        "24/7 Premium Support",
        "Dedicated Project Manager",
        "Regular Strategy Reviews"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan that aligns with your business goals. All plans include our core features and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative bg-background border border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                <div className="text-center mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-foreground/70">/project</span>}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-foreground/70 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-semibold">
                  Get Started
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};