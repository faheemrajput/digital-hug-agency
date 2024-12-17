import { Award, Users, Building, Clock } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Transforming Ideas into Digital Excellence
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            With over a decade of experience in digital innovation, we've been pioneering transformative solutions that drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Our Story
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Founded in 2012, WireLab Solution began with a vision to bridge the gap between complex technology and business needs. Our founder, Michael Chen, with his background in Computer Science from MIT and experience at leading tech companies, established WireLab to provide innovative solutions that drive real business results.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Today, we're proud to have served over <span className="text-primary font-semibold">200+ clients globally</span>, from startups to Fortune 500 companies, helping them achieve their digital transformation goals through our expertise in Python development, OCR solutions, web development, and local SEO optimization.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Certified Experts",
                description: "ISO 27001 certified team with industry recognition",
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "50+ Experts",
                description: "Dedicated professionals across technologies",
              },
              {
                icon: <Building className="w-10 h-10 text-primary" />,
                title: "Global Presence",
                description: "Offices in 3 countries serving worldwide",
              },
              {
                icon: <Clock className="w-10 h-10 text-primary" />,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-secondary rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold mt-4 mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Expertise",
              items: [
                "Advanced Python Development",
                "Machine Learning & AI",
                "OCR & Document Processing",
                "Web Application Development",
                "SEO & Digital Marketing",
              ]
            },
            {
              title: "Industry Experience",
              items: [
                "Financial Services",
                "Healthcare & Medical",
                "E-commerce & Retail",
                "Education & E-learning",
                "Manufacturing & IoT",
              ]
            },
            {
              title: "Recognition",
              items: [
                "Top Tech Innovator 2023",
                "Best Digital Solution Provider",
                "Google Cloud Partner",
                "AWS Advanced Partner",
                "Microsoft Gold Partner",
              ]
            }
          ].map((section, index) => (
            <div key={index} className="p-8 bg-secondary rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300 group">
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="space-y-3 text-foreground/80">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};