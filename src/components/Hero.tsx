import { ArrowRight, Star, Users, Award, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-secondary/5 overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble-1 absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl"></div>
        <div className="bubble-2 absolute w-[250px] h-[250px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="bubble-3 absolute w-[200px] h-[200px] rounded-full bg-primary/15 blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Over 1,500 Satisfied Clients
            </h2>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-shadow-pulse">
                <span className="block text-foreground">Done For You</span>
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">
                  Digital Solutions
                </span>
              </h1>
              
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed">
                We're a full-service digital agency that takes the headache out of development 
                by building secure, scalable, and conversion-focused apps.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Book A Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-16 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-float-shadow">
                <Star className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-sm text-foreground/70">Average Rating</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-float-shadow">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">1,500+</h3>
                <p className="text-sm text-foreground/70">Happy Clients</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-float-shadow">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-sm text-foreground/70">Industry Awards</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-float-shadow">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">99%</h3>
                <p className="text-sm text-foreground/70">Success Rate</p>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-primary/10">
              <p className="text-sm text-foreground/50 mb-8">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div 
                    key={index} 
                    className="h-8 w-32 bg-foreground/5 rounded-md animate-shadow-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bubble-1 {
          top: 10%;
          left: 15%;
          animation: float 8s ease-in-out infinite;
        }
        .bubble-2 {
          top: 60%;
          right: 15%;
          animation: float 12s ease-in-out infinite;
        }
        .bubble-3 {
          top: 30%;
          right: 25%;
          animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
      `}</style>
    </section>
  );
};