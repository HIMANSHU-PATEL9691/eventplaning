import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-event.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury event venue"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-hero" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-gold/30 text-gold text-xs sm:text-sm font-medium tracking-wider uppercase">
            Luxury Event Planning
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Turning Moments Into</span>
          <br />
          <span className="text-gradient-gold">Magical Memories</span>
          <span className="block text-white text-xl sm:text-3xl mt-3 opacity-90">
            With
          </span>
          <span className="text-gradient-gold block">
            Ganesh Event Management
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We create unforgettable events and experiences that leave lasting
          impressions. Weddings, parties, corporate events, and more.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="hero" size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Plan Your Event
            </Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Events Hosted" },
            { number: "12+", label: "Years Experience" },
            { number: "98%", label: "Happy Clients" },
            { number: "50+", label: "Awards Won" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient-gold">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
