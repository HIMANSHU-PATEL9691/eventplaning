import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-event.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Background Image - Optimized for all aspect ratios */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury event venue"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Responsive Gradient: Darker on mobile for text readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-hero" />
      </div>

      {/* Animated particles - Hidden on very small/weak devices to save battery if needed */}
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

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-gold/30 text-gold text-[10px] md:text-sm font-medium tracking-wider uppercase">
            Luxury Event Planning
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          /* Fluid Typography: Text size scales from 2xl on small mobile to 7xl on desktop */
          className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight"
        >
          <span className="text-white">Turning Moments Into</span>
          <br />
          <span className="text-gradient-gold block mt-2">Magical Memories</span>
          <span className="text-white text-2xl sm:text-4xl lg:text-5xl block my-2 opacity-90">With</span>
          <span className="text-gradient-gold block">Ganesh Event Management</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-sm sm:text-lg md:text-xl max-w-xl lg:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
        >
          We create unforgettable events and experiences that leave lasting
          impressions. Weddings, parties, corporate events, and more.
        </motion.p>

        {/* Buttons - Stacked on mobile, row on tablet+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-6 sm:px-0"
        >
          <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm md:text-base h-12 md:h-14" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              View Our Work
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </Button>
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base h-12 md:h-14" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              Plan Your Event
            </Link>
          </Button>
        </motion.div>

        {/* Stats Grid - 2 cols on mobile, 4 on tablet+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Events Hosted" },
            { number: "12+", label: "Years Experience" },
            { number: "98%", label: "Happy Clients" },
            { number: "50+", label: "Awards Won" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 md:bg-transparent py-4 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-none">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">
                {stat.number}
              </div>
              <div className="text-gray-400 text-[10px] md:text-sm mt-1 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile screens where space is tight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-gold/40 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};