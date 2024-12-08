export const Stats = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Clients Served" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "150%", label: "Average ROI" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-background/5 rounded-lg backdrop-blur-sm border border-primary/10">
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};