import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-background via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-x">
              Digital Solutions for 
              <br />
              Modern Business
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft innovative digital experiences that transform businesses and drive meaningful growth
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-primary rounded-lg transition-colors font-semibold border border-primary/20"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};