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
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary via-secondary/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Start a Conversation
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? Our team of experts is here to help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold ml-3">Phone</h3>
              </div>
              <p className="text-foreground/70">+1 (415) 555-0123</p>
              <p className="text-sm text-foreground/50 mt-1">Monday - Friday, 9am - 6pm PST</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold ml-3">Email</h3>
              </div>
              <p className="text-foreground/70">contact@wirelab.co</p>
              <p className="text-sm text-foreground/50 mt-1">We'll respond within 24 hours</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold ml-3">Address</h3>
              </div>
              <p className="text-foreground/70">100 Technology Drive, Suite 300</p>
              <p className="text-sm text-foreground/50 mt-1">San Francisco, CA 94105</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-background/50 border-primary/10 focus:border-primary/30" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-background/50 border-primary/10 focus:border-primary/30" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    className="bg-background/50 border-primary/10 focus:border-primary/30" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <textarea
                    id="message"
                    className="min-h-[120px] w-full rounded-md border border-primary/10 bg-background/50 px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};