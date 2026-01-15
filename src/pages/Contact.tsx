import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      location: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
              Let's Plan Your{" "}
              <span className="text-gradient-gold">Dream Event</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Ready to create something extraordinary? Fill out the form below
              and our team will be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  Have questions or ready to start planning? We're here to help
                  bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a
                      href="mailto:hello@luxeevents.com"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      sengarganesh0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a
                      href="tel:+91 83497 04805"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +91 83497 04805
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                     Pata bhawanipura Saroj nagar
                     <br />
                    Bhind Madhya Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9AM - 6PM
                      <br />
                      Sat: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+918349704805"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-[#25D366] text-gold-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl glass border border-border"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Book Your Event
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-muted/50 border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 83497 04805"
                      required
                      className="bg-muted/50 border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sengarganesh0@gmail.com"
                      required
                      className="bg-muted/50 border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Event Type *
                    </label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, eventType: value })
                      }
                    >
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="theme">Theme Party</SelectItem>
                        <SelectItem value="launch">Product Launch</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Event Date *
                    </label>
                    <Input
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Location
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City or Venue"
                      className="bg-muted/50 border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Budget Range
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Tell Us About Your Event
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your vision, theme ideas, or any special requirements..."
                      rows={5}
                      className="bg-muted/50 border-border focus:border-gold resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full mt-8"
                >
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </Button>
              </form>
            </motion.div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
