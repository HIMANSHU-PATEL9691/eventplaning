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

// Ensure these paths match your folder structure (e.g., @/assets/img/...)
import birthdayGalaImg from "@/assets/birthday-party.jpg"; 
import neonThemeImg from "@/assets/theme-party.jpg";

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
    image: themeImg, // Using themeImg from assets
    location: "Mumbai, India",
    attendees: "150+",
    description: "A vibrant immersive experience featuring UV lighting, custom neon signage, and high-energy music.",
    services: ["Lighting Design", "DJ & Sound", "Immersive Decor"],
  },
  {
    id: 3,
    title: "Sweet 16 Milestone",
    category: "Birthdays",
    image: birthdayImg, // Using birthdayImg from assets
    location: "Indore, MP",
    attendees: "100+",
    description: "A magical fairytale-themed birthday with pastel floral walls, custom cake stands, and a grand entry.",
    services: ["Theme Styling", "Photography", "Catering"],
  },
  {
    id: 4,
    title: "Tech Summit 2024",
    category: "Corporate",
    image: corporateImg,
    location: "Bangalore, India",
    attendees: "1200+",
    description: "A high-tech conference featuring interactive booths and seamless audio-visual integration.",
    services: ["AV Tech", "Stage Design", "VIP Management"],
  },
  {
    id: 5,
    title: "Golden Anniversary Gala",
    category: "Weddings",
    image: heroImg,
    location: "Delhi, India",
    attendees: "250+",
    description: "A luxurious ballroom celebration with gold-themed accents and live orchestral music.",
    services: ["Lighting", "Live Music", "Concept Decor"],
  },
  {
    id: 6,
    title: "Retro 80s Birthday",
    category: "Birthdays",
    image: birthdayGalaImg, 
    location: "Bhopal, MP",
    attendees: "80+",
    description: "A nostalgic trip back to the 80s with disco balls, retro arcade setups, and vintage snacks.",
    services: ["Prop Sourcing", "Venue Transformation", "Entertainers"],
  },
  {
    id: 7,
    title: "Product Launch: Vision X",
    category: "Corporate",
    image: productImg,
    location: "Pune, India",
    attendees: "300+",
    description: "A sleek, modern launch event for a new tech product with media coverage and 3D mapping.",
    services: ["Media PR", "3D Projection Mapping", "Branding"],
  },
  {
    id: 8,
    title: "Casino Royale Night",
    category: "Theme Parties",
    image: neonThemeImg,
    location: "Goa, India",
    attendees: "200+",
    description: "Sophisticated black-tie event with professional casino tables, red carpet, and jazz band.",
    services: ["Casino Tables", "Themed Staff", "Decor"],
  }
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

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-gold opacity-5 blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase border border-gold/30 rounded-full text-gold bg-gold/5">
              Showcasing Excellence
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Crafting <span className="text-gradient-gold">Visual Stories</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of events where every detail is a testament to our passion for perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <div className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-md border-b border-border py-6">
        <div className="container mx-auto px-4 flex justify-center overflow-x-auto">
          <div className="flex gap-3 min-w-max px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 ${
                  activeCategory === category ? "text-white" : "text-muted-foreground hover:text-gold"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-gold rounded-full shadow-lg shadow-gold/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MASONRY GRID --- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer bg-card border border-border aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">{item.category}</span>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <MapPin size={14} /> {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <div className="md:w-3/5 h-[30vh] md:h-auto">
                <img src={selectedItem.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/5 p-8 overflow-y-auto">
                <div className="flex justify-between mb-6">
                  <h2 className="font-display text-3xl font-bold">{selectedItem.title}</h2>
                  <button onClick={() => setSelectedItem(null)}><X /></button>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-6 text-sm">
                    <span className="flex items-center gap-1"><Users size={16} className="text-gold"/> {selectedItem.attendees}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} className="text-gold"/> {selectedItem.location}</span>
                  </div>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-3">Included Services</h4>
                    {selectedItem.services.map(s => (
                      <div key={s} className="flex items-center gap-3 text-sm mb-2 text-muted-foreground">
                        <CheckCircle2 size={16} className="text-gold" /> {s}
                      </div>
                    ))}
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