import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      originalPrice: "$1,499",
      price: "$999",
      description: "Perfect for small businesses starting their digital journey",
      isLimited: true,
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
      originalPrice: "$3,499",
      price: "$2,499",
      description: "Ideal for growing businesses needing comprehensive solutions",
      isLimited: true,
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
      isLimited: false,
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
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-secondary via-secondary/95 to-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] left-0 top-0 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute w-[400px] h-[400px] right-0 bottom-0 rounded-full bg-primary/5 blur-3xl animate-float" 
          style={{ animationDelay: '1s' }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan that aligns with your business goals. All plans include our core features and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="group relative bg-background/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                  {plan.name}
                </CardTitle>
                <div className="text-center mt-4 space-y-1">
                  {plan.originalPrice && (
                    <span className="text-lg text-foreground/50 line-through block">
                      {plan.originalPrice}
                    </span>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-foreground/70">/project</span>
                    )}
                  </div>
                  {plan.isLimited && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Limited spots available
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-center text-foreground/70 mb-6 group-hover:text-foreground/90 transition-colors">
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground/80 group-hover:text-foreground/90 transition-colors">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Hover animation line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary/50 to-primary group-hover:w-full transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};