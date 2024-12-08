import { Rocket, Target, Globe, TrendingUp } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Custom digital strategies to grow your online presence",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Media",
      description: "Engage your audience across all social platforms",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics",
      description: "Data-driven insights to optimize your campaigns",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};