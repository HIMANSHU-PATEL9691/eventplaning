import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 500,
    suffix: "+",
    label: "Events Hosted",
    description: "Successful celebrations",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Guests",
    description: "Memorable experiences",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star reviews",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-background to-primary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-14 h-14 rounded-2xl bg-gradient-gold mx-auto mb-4 flex items-center justify-center shadow-gold"
              >
                <stat.icon className="w-7 h-7 text-background" />
              </motion.div>
              
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
