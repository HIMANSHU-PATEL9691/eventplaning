import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import weddingImg from "@/assets/wedding-ceremony.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import themeImg from "@/assets/theme-party.jpg";

const events = [
  {
    id: 1,
    title: "Elegant Weddings",
    category: "Wedding",
    image: weddingImg,
  },
  {
    id: 2,
    title: "Luxury Birthdays",
    category: "Birthday",
    image: birthdayImg,
  },
  {
    id: 3,
    title: "Corporate Events",
    category: "Corporate",
    image: corporateImg,
  },
  {
    id: 4,
    title: "Theme Parties",
    category: "Theme Party",
    image: themeImg,
  },
];

export const FeaturedEvents = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Featured <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore our collection of stunning events that showcase our
            creativity and attention to detail.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-gold text-sm font-medium tracking-wider uppercase mb-2"
                >
                  {event.category}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient-gold transition-all duration-300"
                >
                  {event.title}
                </motion.h3>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass border border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
