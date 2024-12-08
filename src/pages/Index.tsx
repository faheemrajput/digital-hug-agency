import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      
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