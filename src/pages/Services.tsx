import { Code, Database, Search, Globe, MessageSquare, Rocket, Brain, Mail, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Python API Development",
      description: "Leverage our expertise in building robust, scalable Python APIs that power modern applications. Our solutions ensure optimal performance, security, and seamless integration capabilities.",
      features: [
        "RESTful API Development with industry best practices",
        "FastAPI & Django Implementation for high-performance systems",
        "Advanced API Security & Authentication protocols",
        "Seamless Database Integration & Optimization",
        "Performance Monitoring & Enhancement",
        "Comprehensive API Documentation & Support"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "OCR Solutions",
      description: "Transform your document processing workflow with our state-of-the-art OCR solutions. We specialize in converting various document formats into actionable, searchable data with high accuracy.",
      features: [
        "High-precision Document Text Extraction",
        "Advanced Handwriting Recognition Systems",
        "Comprehensive Multi-language Support",
        "Intelligent PDF Processing & Analysis",
        "Automated Data Validation & Verification",
        "Custom Workflow Automation Solutions"
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Harness the power of artificial intelligence with our custom machine learning solutions. We develop intelligent systems that transform your data into valuable insights and automated decisions.",
      features: [
        "Advanced Predictive Analytics Models",
        "Sophisticated Natural Language Processing",
        "State-of-the-art Computer Vision Systems",
        "Complex Pattern Recognition Algorithms",
        "Tailored ML Model Development",
        "Efficient Data Pipeline Architecture"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Local SEO",
      description: "Dominate your local market with our targeted SEO strategies. We help businesses increase their visibility in local search results and attract more qualified local customers.",
      features: [
        "In-depth Local Keyword Research & Analysis",
        "Complete Google My Business Optimization",
        "Strategic Local Citation Building",
        "Proactive Review Management System",
        "Targeted Local Content Strategy",
        "Comprehensive Competition Analysis"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Social Media Posts",
      description: "Elevate your brand's social media presence with our expert content creation and management services. We craft engaging content that resonates with your audience and drives meaningful engagement.",
      features: [
        "Strategic Content Calendar Planning",
        "Professional Visual Content Creation",
        "Data-driven Engagement Strategies",
        "Comprehensive Analytics & Reporting",
        "Active Community Management",
        "Platform-optimized Content Distribution"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Domain Finding",
      description: "Secure the perfect online identity for your business with our domain acquisition expertise. We help you find and secure domain names that align with your brand and business objectives.",
      features: [
        "Strategic Domain Name Research",
        "Comprehensive Availability Analysis",
        "Proactive Brand Protection Strategies",
        "Expert Domain Valuation Services",
        "Seamless Transfer Assistance",
        "Professional DNS Management"
      ]
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Create stunning, high-performance websites with our expert web development services. We build responsive, user-friendly websites that drive results and provide exceptional user experiences.",
      features: [
        "Modern Responsive Design Implementation",
        "Advanced Frontend Development",
        "Seamless Backend Integration",
        "Custom E-commerce Solutions",
        "Comprehensive Performance Optimization",
        "Enterprise-grade Security Measures"
      ]
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Cold Email Marketing",
      description: "Maximize your outreach success with our strategic cold email marketing services. We create and execute targeted campaigns that generate quality leads and drive meaningful conversions.",
      features: [
        "Strategic Email List Building",
        "Data-driven Campaign Strategy",
        "Advanced A/B Testing Methods",
        "Maximum Deliverability Optimization",
        "Detailed Response Tracking Analytics",
        "Intelligent Follow-up Automation"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "SEO",
      description: "Achieve top search engine rankings with our comprehensive SEO services. We implement proven strategies that improve your visibility and drive sustainable organic traffic growth.",
      features: [
        "In-depth Technical SEO Auditing",
        "Advanced Keyword Research & Analysis",
        "Strategic On-page Optimization",
        "Quality Link Building Campaigns",
        "Results-driven Content Strategy",
        "Continuous Performance Monitoring"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Digital Services</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of digital solutions. We combine industry expertise with cutting-edge technology to deliver exceptional results that drive growth and innovation.
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