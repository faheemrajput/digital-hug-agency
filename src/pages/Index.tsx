import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
                Transform Your Digital Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              We help businesses grow through strategic digital marketing solutions
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Services />

      {/* About Us Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About DigitalPro</h2>
              <div className="space-y-4">
                <p className="text-foreground/70">
                  Founded in 2020, DigitalPro has been at the forefront of digital marketing innovation, 
                  helping businesses transform their online presence and achieve remarkable growth.
                </p>
                <p className="text-foreground/70">
                  Our team of experts combines creativity with data-driven strategies to deliver 
                  exceptional results for our clients across various industries.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-primary mb-2">10+</h4>
                    <p className="text-sm text-foreground/70">Years Experience</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-primary mb-2">200+</h4>
                    <p className="text-sm text-foreground/70">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150%", label: "Average ROI" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                features: ["Social Media Management", "Basic SEO", "Monthly Report", "Email Support"],
              },
              {
                name: "Professional",
                price: "$999",
                features: ["Advanced SEO", "Content Marketing", "PPC Campaigns", "24/7 Support"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Full Digital Strategy", "Dedicated Manager", "Custom Solutions", "Priority Support"],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary' : 'border-primary/20'}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-center mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
                    Get Started
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with DigitalPro transformed our online presence completely. Our leads increased by 200% in just 3 months!",
                author: "Sarah Johnson",
                role: "CEO, TechStart",
              },
              {
                quote: "The team's expertise in digital marketing is unmatched. They delivered results beyond our expectations.",
                author: "Michael Chen",
                role: "Marketing Director, GrowthCo",
              },
              {
                quote: "Professional, responsive, and results-driven. They're not just a service provider, they're a true partner.",
                author: "Emma Williams",
                role: "Founder, EcoStyle",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background border border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-foreground/70 mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? Contact us today and let's discuss how we can help your business grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-background border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold">Phone</h3>
                </div>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <p className="text-foreground/70">contact@digitalpro.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold">Address</h3>
                </div>
                <p className="text-foreground/70">123 Digital Street, Tech City, TC 12345</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-background border border-primary/20">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70">
              © 2024 DigitalPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/70 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;