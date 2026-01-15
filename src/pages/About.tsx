import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  Sparkles,
  Award,
  Users,
  Calendar,
  Star,
  PlayCircle,
} from "lucide-react";

import heroImg from "../assets/hero-event.jpg";

// ✅ LOCAL ASSETS
import ownerImg from "../assets/images/owner.jpeg";
import eventVideo1 from "../assets/video/v1.mp4";
import eventVideo2 from "../assets/video/v2.mp4";
import eventVideo3 from "../assets/video/v3.mp4";
import eventVideo4 from "../assets/video/v4.mp4";
import eventVideo5 from "../assets/video/v5.mp4";
import eventVideo6 from "../assets/video/v6.mp4";
import eventVideo7 from "../assets/video/v7.mp4";

const stats = [
  { icon: Calendar, value: "12+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "500+", label: "Events Hosted" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

// Array for mapping videos easily
const videoGallery = [
  { id: 1, src: eventVideo1, title: "Grand Celebration" },
  { id: 2, src: eventVideo2, title: "Wedding Highlights" },
  { id: 3, src: eventVideo3, title: "Corporate Gala" },
  { id: 4, src: eventVideo4, title: "Luxury Decor" },
  { id: 5, src: eventVideo5, title: "Night Events" },
  { id: 6, src: eventVideo6, title: "The Entry" },
  { id: 7, src: eventVideo7, title: "Vibrant Moments" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gold">About Us</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              The Story Behind <span className="text-gradient-gold">Ganesh Event Management</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 🎬 VIDEO GALLERY SECTION --- */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Our <span className="text-gradient-gold">Cinematic</span> Portfolio
            </h2>
            <p className="mt-4 text-muted-foreground">Watch our latest events in high definition</p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoGallery.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-black shadow-lg"
              >
                <div className="aspect-video w-full">
                  <video
                    src={video.src}
                    controls
                    muted
                    loop
                    className="h-full w-full object-contain bg-black" // 'object-contain' ensures no part of the video is cut
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-gold">
                  <stat.icon className="h-8 w-8 text-gold-foreground" />
                </div>
                <div className="font-display text-4xl font-bold text-gradient-gold">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Enhanced UI */}
      <section className="bg-background py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold">Meet the <span className="text-gradient-gold">Visionary</span></h2>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all hover:shadow-gold/10"
            >
              <div className="aspect-square">
                <img
                  src={ownerImg}
                  alt="Mr. Ganesh Sengar"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-display text-2xl font-bold text-foreground">Mr. Ganesh Sengar</h4>
                <p className="text-gold font-medium">Founder & Creative Director</p>
                <p className="mt-4 text-sm text-muted-foreground italic">"Crafting moments that last a lifetime with passion and precision."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;