import React, { useState, useEffect } from "react";
import BenefitsCard from "./BenefitsCard";

interface CarouselItem {
  title: string;
  desc: string;
  img: string;
}

const benefitsData: CarouselItem[] = [
  {
    title: "Career Advancement",
    desc: "Subscribe to the ACM Digital Library for full-text articles, bibliographic data, research papers, and tutorials on cutting-edge technologies.",
    img: "/assets/LandingPageAssets/CareerAdvancement.svg",
  },
  {
    title: "Leadership",
    desc: "Opportunities for students to take up leadership roles within the chapter and showcase their contributions to a global audience.",
    img: "/assets/LandingPageAssets/Leadership.svg",
  },
  {
    title: "Networking Opportunities",
    desc: "A chance to connect with ACM's global community of professionals, academicians, and students through conferences, webinars, and mentorship programs.",
    img: "/assets/LandingPageAssets/Networking.svg",
  },
  {
    title: "Research Opportunities",
    desc: "ACM offers research opportunities, connecting students to advancements in computing through publications, conferences, and special interest groups.",
    img: "/assets/LandingPageAssets/ProffesionalDevelopment.svg",
  },
  {
    title: "Skill Advancement",
    desc: "Hands-on learning experiences through workshops, hackathons, coding competitions, and seminars that cover various domains of computing and technology.",
    img: "/assets/LandingPageAssets/Skills.svg",
  },
];

const BenefitsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === benefitsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? benefitsData.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === benefitsData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % benefitsData.length;
      cards.push(benefitsData[index]);
    }
    return cards;
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-6"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 to-white p-12 shadow-2xl border border-red-200">
        {/* Cards Container */}
        <div className="flex justify-center items-center gap-8 transition-all duration-500 ease-in-out">
          {getVisibleCards().map((item, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`transform transition-all duration-500 ${
                index === 1 ? "scale-115 z-10" : "scale-95 opacity-75"
              }`}
            >
              <BenefitsCard
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 text-red-600 hover:text-red-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-20 border-2 border-red-200 hover:border-red-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 text-red-600 hover:text-red-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-20 border-2 border-red-200 hover:border-red-300"
          aria-label="Next slide"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BenefitsCarousel;
