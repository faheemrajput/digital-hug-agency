import { Code, Database, Globe, Rocket } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Development",
      description: "Custom Python solutions and APIs for your business needs",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "OCR Solutions",
      description: "Advanced document scanning and text extraction services",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Local SEO",
      description: "Boost your local search rankings and visibility",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern and responsive website development solutions",
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