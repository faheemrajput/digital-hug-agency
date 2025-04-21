
import { ArrowRight } from "lucide-react";
import { Globe } from "@/registry/magicui/globe";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle blurred/glassy background, top accent gradient & grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[320px] bg-primary/20 blur-2xl rounded-full opacity-40" />
      </div>

      <div className="relative w-full max-w-6xl px-6 mx-auto z-10 flex flex-col items-center">
        {/* Globe visual (centered, visually strong, like Cluely's sphere) */}
        <div className="w-full flex items-center justify-center mb-10">
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border bg-background/80 px-16 pb-24 pt-8 backdrop-blur-md shadow-xl">
            <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 whitespace-pre-wrap bg-gradient-to-b from-white via-gray-300/40 to-white/10 bg-clip-text text-center text-7xl font-extrabold leading-none text-transparent drop-shadow-lg">
              Globe
            </span>
            <Globe className="top-20" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.13),rgba(255,255,255,0))]" />
          </div>
        </div>

        {/* Headline - clean, bold, big */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center bg-gradient-to-br from-white via-primary/60 to-primary/90 bg-clip-text text-transparent drop-shadow-xl mb-6">
          Premium Digital Solutions
        </h1>

        {/* Subheading - light, max width, center */}
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80 text-center mb-10">
          Elevate your business with modern, scalable, and visually stunning web & app solutions. <br />
          <span className="font-semibold text-primary">Strategy. Design. Technology.</span>
        </p>

        {/* CTA Button (gradient, modern) */}
        <div className="flex justify-center mb-12">
          <a
            href="#contact"
            className="relative group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary via-primary/95 to-primary/80 text-white font-semibold text-lg shadow-xl hover:scale-[1.04] transition-transform focus-visible:ring-2 ring-primary"
          >
            Get Started
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats (simple, glass, 3 columns like Cluely) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center px-6 py-6 rounded-2xl glass shadow-sm border border-primary/10 text-center bg-secondary/60 backdrop-blur-md"
            >
              <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</span>
              <span className="text-sm text-foreground/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
