
import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-white">
          <Shield className="w-5 h-5" />
          <p className="text-sm font-medium">
            100% Money Back Guarantee - Your Satisfaction is Our Priority
          </p>
        </div>
      </div>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Contact />
      <NewsletterPopup />
      
      <footer className="py-16 border-t border-primary/20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                WireLab Solution
              </h3>
              <p className="text-foreground/70">
                Transforming ideas into digital reality with innovative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#services" className="hover:text-primary">Web Development</a></li>
                <li><a href="#services" className="hover:text-primary">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-primary">Cloud Solutions</a></li>
                <li><a href="#services" className="hover:text-primary">Consulting</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#about" className="hover:text-primary">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>contact@wirelabsolution.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Tech Street</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70">
              © 2024 WireLab Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/70 hover:text-primary">Privacy</a>
              <a href="#" className="text-foreground/70 hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
