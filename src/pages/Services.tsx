import { Code, Database, Search, Globe, MessageSquare, Rocket, Brain, Mail, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Python API Development",
      description: "Custom API solutions built with Python, ensuring scalability and performance for your applications.",
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "OCR Solutions",
      description: "Advanced Optical Character Recognition systems to digitize and process documents efficiently.",
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Intelligent solutions powered by cutting-edge machine learning algorithms and data analysis.",
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Local SEO",
      description: "Boost your local presence with targeted SEO strategies designed for your specific market.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Social Media Posts",
      description: "Engaging social media content creation and management to grow your online presence.",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Domain Finding",
      description: "Strategic domain name research and acquisition services for your digital presence.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Full-stack web development solutions using modern technologies and best practices.",
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Cold Email Marketing",
      description: "Effective cold email campaigns designed to generate leads and drive conversions.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "SEO",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-secondary border border-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;