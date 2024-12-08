import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Working with DigitalPro transformed our online presence completely. Our leads increased by 200% in just 3 months!",
              author: "Sarah Johnson",
              role: "CEO, TechStart",
              rating: 5
            },
            {
              quote: "The team's expertise in digital marketing is unmatched. They delivered results beyond our expectations.",
              author: "Michael Chen",
              role: "Marketing Director, GrowthCo",
              rating: 5
            },
            {
              quote: "Professional, responsive, and results-driven. They're not just a service provider, they're a true partner.",
              author: "Emma Williams",
              role: "Founder, EcoStyle",
              rating: 5
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-background border border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="border-t border-primary/10 pt-4">
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};