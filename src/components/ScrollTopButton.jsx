import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-28 right-6 z-50 rounded-full bg-black text-white p-3 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollTopButton;
