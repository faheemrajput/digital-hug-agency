import React, { useState, useEffect } from 'react'; // Import React, useState, useEffect
import { Code, Database, Search, Globe, MessageSquare, Rocket, Brain, Mail, Target, ArrowDown, PlusCircle, LayoutDashboard, Wrench, ArrowUp } from "lucide-react"; // Added ArrowUp
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Services = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center text-center text-white relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1770&q=80')" }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto">
            Explore our suite of expert services designed to elevate your business and bring your vision to life.
          </p>
          <a href="#services-list">
            <Button size="lg" variant="default" className="text-lg h-14 px-10">
              Discover Our Solutions
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Existing Services Content */}
      <div id="services-list" className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Digital Services</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional results that drive growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-card rounded-xl border border-border shadow-lg group hover:shadow-2xl hover:border-primary/60 transition-all duration-300 ease-in-out overflow-hidden h-full" 
              >
                <div className="p-6"> {/* Padding for content inside the card */}
                  <div className="mb-5 p-3 rounded-lg bg-primary/10 w-min transform group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
                    {React.cloneElement(service.icon, { className: "w-10 h-10 text-primary" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed min-h-[80px]"> {/* Adjusted description height, removed hover expansion */}
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto p-6 pt-0 flex flex-col"> {/* Padding for content, mt-auto pushes this to bottom, added flex-col */}
                  {/* Initially hidden features, revealed on hover (tap on mobile) */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100 overflow-hidden mb-4"> {/* Added mb-4 for spacing before button */}
                    <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Key Features:</p>
                    <ul className="space-y-1.5 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-foreground/75">
                          <PlusCircle className="w-4 h-4 text-primary/80 mr-2 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* "View Details" button - now always visible */}
                  <div className="pt-2 mt-auto"> {/* Removed opacity classes, added mt-auto to push button to bottom of this flex container */}
                     <Button variant="outline" size="sm" className="w-full">
                       View Details
                       {/* <ArrowRight className="w-4 h-4 ml-2" /> Future icon */}
                     </Button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Our Approach Section */}
      <section id="our-approach" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Collaborative Approach</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We believe in a partnership model, working closely with you at every stage to ensure our solutions perfectly align with your vision and goals. Transparency and communication are key to our mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-primary mb-4" />,
                title: "1. Discovery & Planning",
                description: "We start by deeply understanding your objectives, target audience, and project requirements. This phase involves thorough research and strategic planning to lay a solid foundation."
              },
              {
                icon: <LayoutDashboard className="w-10 h-10 text-primary mb-4" />,
                title: "2. Design & Prototyping",
                description: "Our team crafts intuitive user interfaces and experiences, creating prototypes to visualize the solution. We iterate based on your feedback to ensure optimal usability."
              },
              {
                icon: <Wrench className="w-10 h-10 text-primary mb-4" />,
                title: "3. Development & Testing",
                description: "Skilled developers bring the designs to life using cutting-edge technologies. Rigorous testing is conducted throughout the development cycle to ensure quality and performance."
              },
              {
                icon: <Rocket className="w-10 h-10 text-primary mb-4" />,
                title: "4. Launch & Evolution",
                description: "After successful deployment, we provide ongoing support and monitor performance. We believe in continuous improvement and evolving your solution as your business grows."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                {step.icon}
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Success Stories</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover how we've helped businesses like yours achieve remarkable results through innovative digital solutions.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {[
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                title: "Project Alpha: Data Analytics Platform",
                description: "We developed a cutting-edge data analytics platform for a leading fintech company, enabling them to visualize complex datasets and gain actionable insights. The solution led to a 30% improvement in operational efficiency and faster decision-making.",
                align: "left" 
              },
              {
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                title: "Client Success: Mobile Productivity App",
                description: "Our team designed and launched a cross-platform mobile application that streamlined team collaboration and task management for a fast-growing startup. User adoption exceeded targets by 50% within the first three months, significantly boosting productivity.",
                align: "right"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${project.align === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-xl" 
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">{project.title}</h3> {/* Adjusted title size */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>
                  <div className="mt-2">
                    <Button variant="outline" size="lg">
                      View Case Study 
                      {/* <ArrowRight className="w-4 h-4 ml-2" /> For future use */}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted-by" className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted By Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
            {[
              "TechCorp",
              "Innovate Ltd.",
              "Solutions Inc.",
              "Quantum Systems",
              "NextGen AI"
            ].map((logoText, index) => (
              <div key={index} className="p-4">
                <span className="text-xl sm:text-2xl font-semibold text-foreground/60 hover:text-foreground/80 transition-colors duration-300">
                  {logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact-us" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Start Your Project?</h2>
            <p className="text-xl text-foreground/70">
              We're excited to learn about your ideas and discuss how our expertise can help you achieve your goals. Reach out to us today!
            </p>
          </div>

          <form className="max-w-xl mx-auto space-y-6 bg-card p-8 md:p-10 rounded-xl shadow-2xl border border-border">
            <div>
              <Label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">Full Name</Label>
              <Input type="text" id="fullName" name="fullName" placeholder="e.g. Jane Doe" />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</Label>
              <Input type="email" id="email" name="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Your Message</Label>
              <Textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." />
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollTop}
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-opacity duration-300 hover:bg-accent/80"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default Services;