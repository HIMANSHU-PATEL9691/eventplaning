import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Building2, Cake, Palette, Lightbulb, Music } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we craft your perfect day with elegance and precision.",
    color: "from-rose-gold to-gold",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Celebrate milestones with themed parties that create lasting memories for all ages.",
    color: "from-primary to-purple-400",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional conferences, product launches, and team events that impress and engage.",
    color: "from-gold to-amber-600",
  },
  {
    icon: Palette,
    title: "Theme Parties",
    description: "Transform any venue into an immersive experience with our creative themed decorations.",
    color: "from-purple-500 to-primary",
  },
  {
    icon: Lightbulb,
    title: "Product Launches",
    description: "Make a statement with spectacular launch events that capture attention and drive buzz.",
    color: "from-amber-500 to-gold",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Complete entertainment solutions including DJs, live bands, and performers.",
    color: "from-rose-500 to-rose-gold",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive event planning services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-background/50 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-gold/10 hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-gold to-primary" />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className="w-6 h-6 text-background" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
