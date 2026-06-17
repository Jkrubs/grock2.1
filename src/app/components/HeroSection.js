"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const slidesData = [
  {
    title: "Building Kenya's Future, One Project at a Time",
    subtitle:
      "GreenRock Solutions is your trusted construction contractor and real estate development partner in Kenya. From groundbreaking to grand opening, we deliver exceptional residential, commercial, and industrial projects across Nairobi and beyond.",
    video: "/slide1.mp4",
    pillar: "Driven by Ownership.",
    pillarDesc: "100% employee-owned company culture.",
  },
  {
    title: "One Team. Every Phase. Zero Headaches.",
    subtitle:
      "From the first sketch to the final handover, we handle everything so you don't have to chase five different contractors and hope they talk to each other. That's not how we work.",
    video: "/slide3.mp4",
    pillar: "Engineered for Possibility.",
    pillarDesc: "Leveraging cutting-edge construction tech.",
  },
  {
    title: "We Build For Today. And For 50 Years From Now.",
    subtitle:
      "Every GreenRock site runs on strict environmental standards and a safety culture that protects our people, your neighbours, and the land we build on. Because a great structure means nothing if it costs the community around it.",
    video: "/slider4.mp4",
    pillar: "Defined by Impact.",
    pillarDesc: "Building strong communities sustainably.",
  },
];

export default function HeroSection() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperLoaded && typeof window !== "undefined" && window.Swiper) {
      swiperRef.current = new window.Swiper(".hero-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            setActiveIndex(this.realIndex);
          },
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [swiperLoaded]);

  const handlePillarClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => setSwiperLoaded(true)}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="swiper hero-swiper absolute inset-0">
          <div className="swiper-wrapper">
            {slidesData.map((slide, idx) => (
              <div
                key={idx}
                className="swiper-slide relative w-full h-full flex items-center"
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover hero-bg-zoom"
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/30 to-black/30" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">
                  <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-white tracking-tighter leading-none mb-6">
                      {slide.title.split(", ").length > 1 ? (
                        <>
                          {slide.title.split(", ")[0]} <br />
                          <span className="text-[#FFDF1B]">
                            {slide.title.split(", ")[1].replace(".", "")}
                          </span>
                          .
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>

                    <p className="text-gray-300 text-sm md:text-lg max-w-2xl mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <a
                        href="#sectors"
                        className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] text-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#006330]/50"
                      >
                        Explore Our Sectors
                      </a>
                      <a
                        href="/contact"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        Build With Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-button-prev !hidden md:!flex !left-6"></div>
          <div className="swiper-button-next !hidden md:!flex !right-6"></div>
        </div>

        <div className="absolute bottom-8 left-0 w-full z-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {slidesData.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => handlePillarClick(idx)}
                className="text-left p-4 transition-all duration-300 group"
              >
                <h3
                  className={`font-bold text-xs md:text-sm uppercase tracking-wider transition-colors ${
                    activeIndex === idx
                      ? "text-[#FFDF1B]"
                      : "text-white group-hover:text-[#FFDF1B]"
                  }`}
                >
                  {slide.pillar}
                </h3>
                <p className="text-white-400 text-xs mt-1">{slide.pillarDesc}</p>
                {activeIndex === idx && (
                  <div className="w-full bg-white/10 h-[2px] mt-3 overflow-hidden rounded-full">
                    <div className="bg-[#FFDF1B] h-full animate-[sliderProgress_6s_linear_forwards]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
