import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20 animate-gradient-x" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                background: `radial-gradient(circle, ${i === 0 ? 'rgba(255,87,51,0.1)' : i === 1 ? 'rgba(255,87,51,0.05)' : 'rgba(255,87,51,0.08)'} 0%, transparent 70%)`,
                left: `${i * 30}%`,
                top: `${i * 20}%`
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[100px] bg-primary/20"
              style={{
                left: `${i * 20}%`,
                top: `${i * 25}%`
              }}
              animate={{
                width: ["0px", "200px", "0px"],
                opacity: [0, 0.5, 0],
                x: [-100, 100, -100]
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Trusted badge with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 hover:bg-secondary/60 transition-colors"
        >
          <MapPin className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground/70">
            Trusted by 100+ Leading Companies
          </span>
        </motion.div>
        
        {/* Main heading with enhanced gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-x"
        >
          Premium Agency for
          <br />
          Creative Solutions
        </motion.h1>
        
        {/* Subheading with glass effect */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 backdrop-blur-sm"
        >
          We specialize in crafting unique digital experiences that help businesses 
          grow and stand out in their industries, delivering excellence without compromise.
        </motion.p>
        
        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started Today</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-primary/80"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
        
        {/* Stats with enhanced glass morphism */}
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
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};