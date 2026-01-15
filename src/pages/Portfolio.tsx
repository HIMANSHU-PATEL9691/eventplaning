import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { X, MapPin, Users, CheckCircle2 } from "lucide-react";

// ✅ LOCAL ASSET IMPORTS
import heroImg from "@/assets/hero-event.jpg";
import weddingImg from "@/assets/wedding-ceremony.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import themeImg from "@/assets/theme-party.jpg";
import productImg from "@/assets/product-launch.jpg";

const categories = ["All", "Weddings", "Birthdays", "Corporate", "Theme Parties"];

const portfolioItems = [
  {
    id: 1,
    title: "Royal Garden Wedding",
    category: "Weddings",
    image: weddingImg,
    location: "Jaipur, Rajasthan",
    attendees: "400+",
    description: "An elegant outdoor ceremony with romantic floral arrangements and traditional luxury décor.",
    services: ["Floral Design", "Catering", "Guest Management"],
  },
  {
    id: 2,
    title: "Neon Night Theme",
    category: "Theme Parties",
    image: themeImg,
    location: "Mumbai, India",
    attendees: "150+",
    description: "A vibrant immersive experience featuring UV lighting, custom neon signage, and high-energy music.",
    services: ["Lighting Design", "DJ & Sound", "Immersive Decor"],
  },
  {
    id: 3,
    title: "Sweet 16 Milestone",
    category: "Birthdays",
    image: birthdayImg,
    location: "Indore, MP",
    attendees: "100+",
    description: "A magical fairytale-themed birthday with pastel floral walls, custom cake stands, and a grand entry.",
    services: ["Theme Styling", "Photography", "Catering"],
  },
  // ... rest of your items
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* --- HERO SECTION: Responsive Margins & Font Scaling --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-gradient-gold opacity-5 blur-[80px] md:blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border border-gold/30 rounded-full text-gold bg-gold/5">
              Showcasing Excellence
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Crafting <span className="text-gradient-gold">Visual Stories</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of events where every detail is a testament to our passion for perfection across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER NAVIGATION: Mobile Swipeable / Desktop Center --- */}
      <div className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-md border-b border-border py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 md:gap-3 no-scrollbar pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative flex-shrink-0 px-6 py-2 md:px-8 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-500 ${
                  activeCategory === category ? "text-white" : "text-muted-foreground hover:text-gold"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-gold rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MASONRY GRID: Multi-column breakpoints --- */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer bg-card border border-border aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">{item.category}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm flex items-center gap-2">
                      <MapPin size={12} className="md:w-3.5 md:h-3.5" /> {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX: Full-screen responsive modal --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 sm:p-6 lg:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-[1.5rem] md:rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:row lg:flex-row"
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 h-[35vh] sm:h-[45vh] lg:h-auto overflow-hidden">
                <img src={selectedItem.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Info Container */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold">{selectedItem.title}</h2>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="p-2 bg-secondary rounded-full hover:bg-border transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full border border-border">
                      <Users size={14} className="text-gold"/> {selectedItem.attendees}
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full border border-border">
                      <MapPin size={14} className="text-gold"/> {selectedItem.location}
                    </span>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">About the Event</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
                      "{selectedItem.description}"
                    </p>
                  </div>

                  <div className="border-t border-border pt-6 pb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Core Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      {selectedItem.services.map(s => (
                        <div key={s} className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0" /> {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Portfolio;