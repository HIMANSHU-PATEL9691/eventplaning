import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-gold/10" />

      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Ready to Begin?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Let's Create Your
            <br />
            <span className="text-gradient-gold">Dream Event</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 mb-10">
            Every celebration deserves to be extraordinary. Contact us today and
            let's start planning your unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Plan Your Dream Event
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:+918349704805" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
