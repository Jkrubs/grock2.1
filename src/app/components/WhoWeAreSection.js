"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/wwa1.webp", alt: "GreenRock construction project site" },
  { src: "/wwa2.webp", alt: "GreenRock construction team at work" },
  { src: "/wwa3.webp", alt: "GreenRock completed development project" },
];

const paragraphs = [
  "Most construction horror stories start the same way -- a contractor who seemed great on paper, disappeared mid-project, and left someone with a half-built house and an empty account.",
  "We started GreenRock Solutions because that story was too common in Kenya's construction industry. So we built something different — a construction and real estate development firm with the flexibility to mobilise the right people for your project, an unwavering focus on your bottom line, and the capability to leverage innovation to meet whatever your project demands.",
  "As trusted general contractors in Kenya, we don't just build structures. We build value — on time, within cost, to a standard that holds up long after handover.",
  "We're registered with the National Construction Authority (NCA), backed by 10+ years of combined experience across residential construction, commercial construction, and real estate development. But what we're most proud of isn't the numbers — it's the clients who come back. And the ones who send their friends."
];

export default function WhoWeAreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B] mb-3">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tight leading-none mb-8">
            Built to Change the Construction Story.
          </h2>
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <button className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] text-center px-8 py-4 mt-5  text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#006330]/50">ABOUT US</button>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 z-20 h-[20%] w-[20%] border-t-[10px] border-r-[10px] border-[#FFDF1B]" />
          <div className="absolute -bottom-4 -left-4 z-20 h-[20%] w-[20%] border-b-[10px] border-l-[10px] border-[#006330]" />

          <div className="relative h-[380px] md:h-[560px] overflow-hidden border border-white/10 bg-black shadow-2xl">
            {images.map((image, idx) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={idx === 0}
                className={`object-cover  animate-kenburns duration-700 ${
                  activeIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex gap-2">
                {images.map((image, idx) => (
                  <button
                    key={image.src}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Show who we are image ${idx + 1}`}
                    className={`h-1.5 transition-all duration-300 ${
                      activeIndex === idx ? "w-10 bg-[#FFDF1B]" : "w-5 bg-white/40 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
