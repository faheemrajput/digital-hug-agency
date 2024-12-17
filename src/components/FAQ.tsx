import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What services does WireLab Solution offer?",
      answer: "We offer comprehensive digital solutions including web development, mobile app development, cloud services, and digital transformation consulting.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices, implement rigorous testing protocols, and maintain continuous communication with our clients throughout the development process.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our team is proficient in modern technologies including React, Node.js, Python, AWS, and various cloud platforms to deliver cutting-edge solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and requirements. We provide detailed project schedules during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Got Questions?
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services and processes. 
            Can't find what you're looking for? <span className="text-primary hover:underline cursor-pointer">Contact us</span>
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/30 backdrop-blur-sm rounded-lg px-6 border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            Still have questions? We're here to help!
          </p>
          <button className="mt-4 px-6 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-colors duration-300 text-sm font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};