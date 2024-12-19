export const Stats = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-secondary via-secondary/95 to-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200px] h-[200px] left-0 top-0 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute w-[300px] h-[300px] right-0 bottom-0 rounded-full bg-primary/5 blur-3xl animate-float" 
          style={{ animationDelay: '1s' }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Clients Served", delay: "0s" },
            { number: "98%", label: "Client Satisfaction", delay: "0.1s" },
            { number: "150%", label: "Average ROI", delay: "0.2s" },
            { number: "24/7", label: "Support Available", delay: "0.3s" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-background/5 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: stat.delay }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative space-y-2">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                  {stat.number}
                </h3>
                <p className="text-foreground/70 font-medium group-hover:text-foreground/90 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

              {/* Hover animation line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary/50 to-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};