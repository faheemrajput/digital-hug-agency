import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-background border border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background border border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-foreground/70">contact@digitalpro.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background border border-primary/20 hover:border-primary/40 transition-all">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-secondary/5" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-secondary/5" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="bg-secondary/5" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="min-h-[120px] w-full rounded-md border border-input bg-secondary/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};