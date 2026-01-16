import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { VideoModal } from "./VideoModal";

/* =======================
   IMPORT VIDEOS
======================= */
import v1 from "../assets/video/v1.mp4";
import v2 from "../assets/video/v2.mp4";
import v3 from "../assets/video/v3.mp4";
import v4 from "../assets/video/v4.mp4";
import v5 from "../assets/video/v5.mp4";
import v6 from "../assets/video/v6.mp4";
import v7 from "../assets/video/v7.mp4";

/* =======================
   PHONE NUMBER
======================= */
const PHONE_NUMBER = "+918349704805"; // ✅ change to your number

/* =======================
   PACKAGE DATA
======================= */
const packages = [
  {
    name: "Silver Package",
    price: "Rs.12,499",
    video: v1,
    features: [
      "Basic Theme Decoration",
      "Standard Music System",
      "On-site Event Coordinator",
    ],
  },
   {
    name: "Corporate Premium",
    price: "Rs.17,499",
    video: v6,
    features: [
      "LED Wall Presentation",
      "Stage Lighting & Effects",
      "Event Photography Coverage",
    ],
  },
  {
    name: "Royal Wedding",
    price: "Rs.21,499",
    video: v4,
    features: [
      "Royal-Style Wedding Decor",
      "DJ with Advanced Lighting",
      "Cinematic Drone Coverage",
    ],
  },
  {
    name: "Platinum Package",
    price: "Rs.24,999",
    video: v3,
    features: [
      "Premium Theme Decoration",
      "Professional DJ Setup",
      "Photography & Videography",
    ],
  },
  {
    name: "Corporate Basic",
    price: "Rs.27,499",
    video: v5,
    features: [
      "Stage & Backdrop Setup",
      "Professional Sound System",
      "Corporate Branding (Banners & Standees)",
    ],
  },
 
];

/* =======================
   VIDEO PREVIEW
======================= */
const VideoPreview = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVertical, setIsVertical] = useState(false);

  return (
    <div
      className="relative w-full aspect-video overflow-hidden bg-black group"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          setIsVertical(v.videoHeight > v.videoWidth);
        }}
        className={`w-full h-full transition-transform duration-500 ${
          isVertical ? "object-contain scale-95" : "object-cover scale-105"
        }`}
      />

      {/* Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play Button */}
      <button
        onClick={onClick}
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition"
      >
        <Play className="w-12 h-12 text-white" />
      </button>
    </div>
  );
};

/* =======================
   PRICING CATALOG
======================= */
export const PricingCatalog = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-wider text-sm">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Event <span className="text-gradient-gold">Packages</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose the perfect package and preview it instantly.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden border bg-secondary border-border"
            >
              <VideoPreview
                src={pkg.video}
                onClick={() => setActiveVideo(pkg.video)}
              />

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">
                  {pkg.name}
                </h3>
                <p className="text-2xl font-bold text-gold mt-2">
                  {pkg.price}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CONTACT BUTTON */}
                <Button
                  variant="gold"
                  className="w-full mt-5"
                  onClick={() =>
                    (window.location.href = `tel:${PHONE_NUMBER}`)
                  }
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
