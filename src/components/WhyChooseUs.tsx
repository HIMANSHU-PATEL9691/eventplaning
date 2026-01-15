import { motion } from "framer-motion";
import { Sparkles, Award, Users, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description:
      "Every event is a unique masterpiece tailored to your vision and dreams.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description:
      "Our experienced planners have won 50+ industry awards for excellence.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personal event coordinator assigned to you from start to finish.",
  },
  {
    icon: Clock,
    title: "Flawless Execution",
    description:
      "Meticulous planning and seamless coordination on the big day.",
  },
  {
    icon: Heart,
    title: "Passionate Service",
    description:
      "We pour our hearts into every detail to make your event magical.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "98% client satisfaction rate with hundreds of successful events.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            The Luxe <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We don't just plan events—we create experiences that captivate,
            inspire, and leave lasting impressions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-gold/10 hover:shadow-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
