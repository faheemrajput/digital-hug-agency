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
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70">
            Find answers to common questions about our services and processes
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};