import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-background/90 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5">
              <span className="text-xs font-semibold bg-primary text-white px-2 py-0.5 rounded-full">
                NEW
              </span>
              <span className="text-sm font-medium text-primary">
                No. 1 Agency of 2025
              </span>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Premium Agency</span>
                <span className="block text-foreground">for Creatives.</span>
              </h1>
              
              <p className="text-lg text-foreground/70 max-w-xl">
                We specialize in crafting unique digital presence 
                that help businesses grow and stand out in their industries.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Connect With Us
              </a>
              <button
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/10 transition-colors"
              >
                What is Landin?
              </button>
            </div>
            
            {/* Trusted By */}
            <div className="pt-12 mt-12 border-t border-foreground/10">
              <p className="text-sm text-foreground/50 mb-6">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-8 items-center opacity-50">
                {[1, 2, 3].map((index) => (
                  <div 
                    key={index} 
                    className="h-8 w-24 bg-foreground/10 rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/50 backdrop-blur-sm border border-foreground/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                <Play className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};