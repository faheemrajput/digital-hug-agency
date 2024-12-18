import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-primary/30 blur-xl animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 backdrop-blur-sm">
              Over 1,500 Satisfied Clients
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
              <span className="block text-foreground">Done For You</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bubble Development
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed">
              We're a full service bubble agency that takes the headache out of development by building secure, scalable, and conversion-focused apps.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Book A Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="pt-16 border-t border-primary/10">
            <p className="text-sm text-foreground/50 mb-6">Trusted by leading companies</p>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-8 items-center justify-items-center opacity-50">
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div key={index} className="h-8">
                  <img
                    src={`/company-${index}.svg`}
                    alt={`Company ${index}`}
                    className="h-full w-auto object-contain filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};