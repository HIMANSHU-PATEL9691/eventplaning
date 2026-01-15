import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  Heart,
  Cake,
  Building2,
  Palette,
  Rocket,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import weddingImg from "@/assets/wedding-ceremony.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import themeImg from "@/assets/theme-party.jpg";
import productImg from "@/assets/product-launch.jpg";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning & Décor",
    description:
      "From intimate ceremonies to grand celebrations, we craft every detail of your special day with elegance and precision. Our team handles everything from venue selection to floral arrangements, ensuring your wedding is nothing short of magical.",
    image: weddingImg,
    features: [
      "Full-service planning",
      "Custom décor design",
      "Vendor coordination",
      "Day-of coordination",
    ],
  },
  {
    icon: Cake,
    title: "Birthday & Private Parties",
    description:
      "Celebrate life's milestones in style. Whether it's a Sweet 16, milestone birthday, or intimate gathering, we create personalized experiences that reflect your unique personality and leave guests amazed.",
    image: birthdayImg,
    features: [
      "Theme development",
      "Entertainment booking",
      "Catering coordination",
      "Photo/video services",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Elevate your brand with sophisticated corporate events. From conferences and galas to team retreats and product launches, we deliver seamless execution that impresses stakeholders and attendees alike.",
    image: corporateImg,
    features: [
      "Conference planning",
      "Team building events",
      "Award ceremonies",
      "Brand activations",
    ],
  },
  {
    icon: Palette,
    title: "Theme Parties",
    description:
      "Transform any space into an immersive experience. Our creative team brings your wildest theme ideas to life with stunning décor, entertainment, and attention to every atmospheric detail.",
    image: themeImg,
    features: [
      "Custom themes",
      "Immersive décor",
      "Costume coordination",
      "Interactive elements",
    ],
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description:
      "Make your product debut unforgettable. We create buzz-worthy launch events that capture media attention and leave lasting impressions on your target audience.",
    image: productImg,
    features: [
      "Press events",
      "Influencer activations",
      "Exhibition setups",
      "Digital integration",
    ],
  },
  {
    icon: Lightbulb,
    title: "Stage & Lighting Setup",
    description:
      "Set the perfect mood with professional stage design and lighting. Our technical team creates dramatic visuals that elevate any event from ordinary to extraordinary.",
    image: corporateImg,
    features: [
      "Stage design",
      "LED installations",
      "Sound engineering",
      "Special effects",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
              Creating <span className="text-gradient-gold">Extraordinary</span>{" "}
              Experiences
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              From concept to execution, we offer comprehensive event planning
              services tailored to your vision and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center mb-24 last:mb-0`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-gold-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
