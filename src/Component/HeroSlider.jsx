import { useState, useEffect } from "react";

import gamingcollection from "../image/gamingcollection.jpg";
import headphonesales from "../image/headphonesales.jpg";
import laptopdeals from "../image/laptopdeals.jpg";

const HeroSlider = () => {

  const slides = [
    gamingcollection,
    headphonesales,
    laptopdeals
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
  // };

  // const previousSlide = () => {
  //   setCurrentSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length);
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider">

      <img
        src={slides[currentSlide]}
        alt="sale"
      />

      {/* <button onClick={previousSlide}>
        ← Previous
      </button>

      <button onClick={nextSlide}>
        Next →
      </button> */}

    </div>
  );
};

export default HeroSlider;