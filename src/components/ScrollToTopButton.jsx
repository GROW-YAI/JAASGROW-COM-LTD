import React, { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "lucide-react"; // Optional: using lucide-react icons

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolling down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-700 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUpCircleIcon size={28} className="text-white" />
      </button>
    )
  );
};

export default ScrollToTopButton;
