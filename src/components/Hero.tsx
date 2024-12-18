import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-secondary/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 backdrop-blur-sm">
              Digital Innovation Agency
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-foreground">We Create Digital</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
                Experiences That Matter
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed">
              Transforming ideas into exceptional digital solutions. We combine creativity 
              with technical expertise to help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors font-semibold border border-primary/10 hover:border-primary/20"
            >
              Explore Services
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary/10">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};