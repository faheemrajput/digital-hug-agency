import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      client: "Fashion Retailer",
      description: "Built a scalable e-commerce platform handling 10,000+ daily transactions",
      tags: ["React", "Node.js", "AWS", "Stripe"],
      metrics: "200% increase in online sales"
    },
    {
      title: "Mobile Banking App",
      client: "Financial Institution",
      description: "Developed a secure mobile banking application with biometric authentication",
      tags: ["React Native", "Firebase", "Security"],
      metrics: "1M+ active users"
    },
    {
      title: "Analytics Dashboard",
      client: "Tech Startup",
      description: "Created a real-time analytics dashboard for business intelligence",
      tags: ["Vue.js", "Python", "D3.js"],
      metrics: "Reduced decision time by 60%"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.client}</p>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm font-semibold text-primary">{project.metrics}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};