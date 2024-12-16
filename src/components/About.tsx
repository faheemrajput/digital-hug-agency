import { Award, Users, Building, Clock } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">About WireLab Solution</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            With over a decade of experience in digital innovation, we've been at the forefront of transforming businesses through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Story
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Founded in 2012, WireLab Solution began with a vision to bridge the gap between complex technology and business needs. Our founder, Michael Chen, with his background in Computer Science from MIT and experience at leading tech companies, established WireLab to provide innovative solutions that drive real business results.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Today, we're proud to have served over 200 clients globally, from startups to Fortune 500 companies, helping them achieve their digital transformation goals through our expertise in Python development, OCR solutions, web development, and local SEO optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Certified Experts",
                description: "ISO 27001 certified team with industry recognition",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "50+ Experts",
                description: "Dedicated professionals across technologies",
              },
              {
                icon: <Building className="w-8 h-8 text-primary" />,
                title: "Global Presence",
                description: "Offices in 3 countries serving worldwide",
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-secondary rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
                {item.icon}
                <h4 className="font-semibold mt-4 mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-secondary rounded-lg border border-primary/10">
            <h4 className="text-xl font-semibold mb-4">Our Expertise</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>• Advanced Python Development</li>
              <li>• Machine Learning & AI</li>
              <li>• OCR & Document Processing</li>
              <li>• Web Application Development</li>
              <li>• SEO & Digital Marketing</li>
            </ul>
          </div>
          
          <div className="p-8 bg-secondary rounded-lg border border-primary/10">
            <h4 className="text-xl font-semibold mb-4">Industry Experience</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>• Financial Services</li>
              <li>• Healthcare & Medical</li>
              <li>• E-commerce & Retail</li>
              <li>• Education & E-learning</li>
              <li>• Manufacturing & IoT</li>
            </ul>
          </div>
          
          <div className="p-8 bg-secondary rounded-lg border border-primary/10">
            <h4 className="text-xl font-semibold mb-4">Recognition</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>• Top Tech Innovator 2023</li>
              <li>• Best Digital Solution Provider</li>
              <li>• Google Cloud Partner</li>
              <li>• AWS Advanced Partner</li>
              <li>• Microsoft Gold Partner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};