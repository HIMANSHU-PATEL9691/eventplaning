import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              className="group mb-4 flex items-center gap-2"
            >
              <Sparkles className="h-6 w-6 text-gold transition-transform group-hover:rotate-12" />
              <span className="font-display text-xl font-bold text-gradient-gold">
                Ganesh Event Management
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Turning moments into magical memories. We create unforgettable
              events that leave lasting impressions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: Instagram,
                  href:
                    "https://www.instagram.com/ganesh_sengar008?igsh=bm81aXlzN3pycGNl&utm_source=ig_contact_invite",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1Bfhg2oDth/",
                  label: "Facebook",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@GaneshSengar001",
                  label: "YouTube",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-full border border-border bg-background/40 p-2 transition-all hover:border-gold/50 hover:bg-background"
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Weddings",
                "Birthdays",
                "Corporate Events",
                "Theme Parties",
              ].map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" />
                sengarganesh0@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-gold" />
                +91 83497 04805
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>
                 Pata bhawanipura Saroj nagar
                 <br />
               Bhind Madhya Pradesh
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ganesh Event Management. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with Ganesh Event Management for unforgettable moments
          </p>
        </div>
      </div>
    </footer>
  );
};
