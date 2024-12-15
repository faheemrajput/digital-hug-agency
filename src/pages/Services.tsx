import { Code, Database, Search, Globe, MessageSquare, Rocket, Brain, Mail, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Python API Development",
      description: "Custom API solutions built with Python, ensuring scalability and performance for your applications.",
      features: [
        "RESTful API Development",
        "FastAPI & Django Implementation",
        "API Security & Authentication",
        "Database Integration",
        "Performance Optimization",
        "API Documentation"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "OCR Solutions",
      description: "Advanced Optical Character Recognition systems to digitize and process documents efficiently.",
      features: [
        "Document Text Extraction",
        "Handwriting Recognition",
        "Multi-language Support",
        "PDF Processing",
        "Data Validation",
        "Automated Workflows"
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Intelligent solutions powered by cutting-edge machine learning algorithms and data analysis.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Pattern Recognition",
        "Custom ML Models",
        "Data Pipeline Development"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Local SEO",
      description: "Boost your local presence with targeted SEO strategies designed for your specific market.",
      features: [
        "Local Keyword Research",
        "Google My Business Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Content Strategy",
        "Competition Analysis"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Social Media Posts",
      description: "Engaging social media content creation and management to grow your online presence.",
      features: [
        "Content Calendar Planning",
        "Visual Content Creation",
        "Engagement Strategy",
        "Analytics & Reporting",
        "Community Management",
        "Platform-specific Content"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Domain Finding",
      description: "Strategic domain name research and acquisition services for your digital presence.",
      features: [
        "Domain Name Research",
        "Availability Check",
        "Brand Protection",
        "Domain Valuation",
        "Transfer Assistance",
        "DNS Management"
      ]
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Full-stack web development solutions using modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Frontend Development",
        "Backend Integration",
        "E-commerce Solutions",
        "Performance Optimization",
        "Security Implementation"
      ]
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Cold Email Marketing",
      description: "Effective cold email campaigns designed to generate leads and drive conversions.",
      features: [
        "Email List Building",
        "Campaign Strategy",
        "A/B Testing",
        "Deliverability Optimization",
        "Response Tracking",
        "Follow-up Automation"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "SEO",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
      features: [
        "Technical SEO Audit",
        "Keyword Research",
        "On-page Optimization",
        "Link Building",
        "Content Strategy",
        "Performance Monitoring"
      ]
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
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;