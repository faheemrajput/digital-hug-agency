import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background grid and gradient effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Main content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Trusted badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/70">
            Trusted by 100+ Leading Companies
          </span>
        </motion.div>
        
        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary/50 to-foreground bg-clip-text text-transparent"
        >
          Premium Agency for
          <br />
          Creative Solutions
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
        >
          We specialize in crafting unique digital experiences that help businesses 
          grow and stand out in their industries, delivering excellence without compromise.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "24/7", label: "Support Available" },
            { value: "99.9%", label: "Customer Satisfaction" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
      </div>
    </section>
  );
};