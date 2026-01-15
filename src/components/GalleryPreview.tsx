import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, ArrowUpRight } from "lucide-react";
import weddingImg from "@/assets/wedding-ceremony.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import themeImg from "@/assets/theme-party.jpg";
import productImg from "@/assets/product-launch.jpg";
import heroImg from "@/assets/hero-event.jpg";

const galleryImages = [
  { src: weddingImg, alt: "Elegant wedding setup", span: "col-span-2 row-span-2" },
  { src: birthdayImg, alt: "Birthday celebration", span: "col-span-1 row-span-1" },
  { src: corporateImg, alt: "Corporate event", span: "col-span-1 row-span-1" },
  { src: themeImg, alt: "Theme party", span: "col-span-1 row-span-2" },
  { src: productImg, alt: "Product launch", span: "col-span-1 row-span-1" },
  { src: heroImg, alt: "Luxury venue", span: "col-span-1 row-span-1" },
];

export const GalleryPreview = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2">
            <Instagram className="w-4 h-4" />
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Behind The <span className="text-gradient-gold">Scenes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A glimpse into our most memorable events and creative setups.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${image.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight className="w-6 h-6 text-background" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
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
            View Full Gallery
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
