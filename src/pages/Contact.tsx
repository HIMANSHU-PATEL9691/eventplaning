import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ChevronDown,
  HelpCircle 
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactDetails = [
    { 
      icon: Mail, 
      label: "Email", 
      val: "sengarganesh0@gmail.com", 
      href: "mailto:sengarganesh0@gmail.com",
      desc: "For detailed proposals and inquiries"
    },
    { 
      icon: Phone, 
      label: "Call Us", 
      val: "+91 83497 04805", 
      href: "tel:+918349704805",
      desc: "Direct line to our creative team"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      val: "Bhawanipura, Saroj Nagar, Bhind, MP", 
      href: "https://maps.google.com/?q=Bhawanipura+Saroj+Nagar+Bhind",
      desc: "Visit our studio for a consultation"
    },
    { 
      icon: Clock, 
      label: "Availability", 
      val: "Mon - Sat (9AM - 8PM)", 
      href: "#",
      desc: "Ready to assist during business hours"
    },
  ];

  const faqs = [
    {
      q: "How early should I book my event?",
      a: "For weddings, we recommend booking 6-12 months in advance. For corporate events and parties, 2-3 months is usually sufficient."
    },
    {
      q: "Do you handle events outside of Bhind?",
      a: "Yes! While we are based in Bhind, we travel across Madhya Pradesh and neighboring states to manage destination weddings and grand events."
    },
    {
      q: "Can you work within a specific budget?",
      a: "Absolutely. We pride ourselves on creating magic at various price points. We will tailor our services to provide the best value for your specific budget."
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-gold/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Let's Start Your <span className="text-gradient-gold italic">Journey</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 leading-relaxed">
              Ready to create something extraordinary? Reach out through any of the channels below or visit our studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 rounded-[2rem] bg-card border border-border/50 hover:border-gold/30 transition-all duration-500 shadow-xl"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center border border-border group-hover:bg-gradient-gold transition-all duration-500">
                      <item.icon className="w-6 h-6 text-gold group-hover:text-gold-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">{item.label}</p>
                      <a href={item.href} className="text-lg font-bold text-foreground hover:text-gold transition-colors block break-all mb-1">
                        {item.val}
                      </a>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a
                href="https://wa.me/+918349704805"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center justify-center gap-4 w-full p-8 rounded-[2.5rem] bg-[#25D366] text-white font-bold shadow-2xl transition-transform hover:scale-[1.01]"
              >
                <MessageCircle className="w-10 h-10" />
                <div className="text-center md:text-left">
                  <span className="block text-2xl tracking-tight">Chat with us on WhatsApp</span>
                  <span className="block text-sm font-medium opacity-90">Instant replies for your event queries</span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ & Map Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            {/* FAQ Part */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="text-gold w-8 h-8" />
                <h2 className="font-display text-3xl font-bold">Common Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-border rounded-2xl overflow-hidden bg-background cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <div className="p-5 flex justify-between items-center select-none">
                      <span className="font-bold text-foreground">{faq.q}</span>
                      <ChevronDown className={`text-gold transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    {activeFaq === idx && (
                      <div className="p-5 pt-0 text-muted-foreground border-t border-border animate-in fade-in slide-in-from-top-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Part */}
            <div className="h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114541.28287848693!2d78.73030238466635!3d26.2157077688053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976999201f81d1b%3A0xc3f9588939c89498!2sBhind%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;