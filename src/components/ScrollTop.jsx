import React, { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    scroll.scrollToTop({
      duration: 5000, // Adjust the scroll duration here
      smooth: "easeInOutQuart", // Makes scrolling smooth
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          id="scrolltop"
          className="btn fixed bottom-5 right-4 z-50 border-2 border-l-gray-400 border-t-gray-400 p-2 text-2xl font-semibold text-white transition duration-500 hover:text-darkcustom dark:text-white dark:hover:text-white lg:bottom-5 lg:right-16 lg:text-3xl"
          onClick={scrollTop}
        >
          <IoMdArrowRoundUp />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
