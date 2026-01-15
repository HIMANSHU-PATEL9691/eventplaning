import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, ClipboardList, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "Share your vision, preferences, and budget. We listen carefully to understand your dream event.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planning & Design",
    description: "Our creative team develops a comprehensive plan with mood boards, timelines, and vendor coordination.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Coordination",
    description: "We handle all logistics, vendor management, and ensure every detail is perfectly aligned.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Execution",
    description: "On the big day, we manage everything seamlessly so you can enjoy every moment.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            How We <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A seamless journey from your first inquiry to an unforgettable celebration.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-px bg-border hidden lg:block" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step number with icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold"
                  >
                    <item.icon className="w-8 h-8 text-background" />
                  </motion.div>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-gold flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">{item.step}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
