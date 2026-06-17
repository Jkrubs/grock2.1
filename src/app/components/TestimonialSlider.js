"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Amara Osei",
    handle: "@amara_builds",
    location: "Nairobi, Kenya",
    rating: 5,
    quote:
      "GreenRock delivered our commercial warehouse ahead of schedule with zero compromise on quality. Their attention to structural integrity is second to none.",
    product: "Commercial Construction",
    avatar: "AO",
    avatarColor: "#2d5a27",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    id: 2,
    name: "Fatima Al-Rashid",
    handle: "@fatima_arc",
    location: "Mombasa, Kenya",
    rating: 5,
    quote:
      "I've worked with many contractors, but GreenRock's professionalism is unmatched. Our office complex came out exactly as envisioned — stunning and durable.",
    product: "Office Complex",
    avatar: "FA",
    avatarColor: "#1a3d5c",
    bgImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
  {
    id: 3,
    name: "Kwame Mensah",
    handle: "@kwame_dev",
    location: "Kisumu, Kenya",
    rating: 5,
    quote:
      "The team handled our industrial plant expansion with expertise I didn't expect. Communication was clear throughout. Highly recommend GreenRock Solutions.",
    product: "Industrial Expansion",
    avatar: "KM",
    avatarColor: "#4a3728",
    bgImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80",
  },
  {
    id: 4,
    name: "Priya Sharma",
    handle: "@priya_infra",
    location: "Nakuru, Kenya",
    rating: 5,
    quote:
      "Our retail mall was completed with exceptional craftsmanship. GreenRock's project management made a complex build feel effortless. Absolutely world-class.",
    product: "Retail Development",
    avatar: "PS",
    avatarColor: "#5c1a3d",
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  },
  {
    id: 5,
    name: "Emmanuel Njoku",
    handle: "@em_builds_ke",
    location: "Eldoret, Kenya",
    rating: 5,
    quote:
      "Five-star experience from initial consultation to final handover. GreenRock didn't just build a structure — they built our vision. Remarkable quality.",
    product: "Mixed-Use Building",
    avatar: "EN",
    avatarColor: "#1c4a1c",
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
  },
  {
    id: 6,
    name: "Zara Kimani",
    handle: "@zara_architect",
    location: "Thika, Kenya",
    rating: 5,
    quote:
      "As an architect, I'm very particular about construction quality. GreenRock consistently exceeded my standards. Their safety protocols are exemplary.",
    product: "Residential Tower",
    avatar: "ZK",
    avatarColor: "#3d2a5c",
    bgImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80",
  },
  {
    id: 7,
    name: "David Muthoni",
    handle: "@david_m_ke",
    location: "Nairobi, Kenya",
    rating: 5,
    quote:
      "GreenRock renovated our entire facility while we continued operations. Their minimal disruption approach saved us weeks of downtime. Brilliant execution.",
    product: "Industrial Renovation",
    avatar: "DM",
    avatarColor: "#2a4a5c",
    bgImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80",
  },
  {
    id: 8,
    name: "Nadia Okonkwo",
    handle: "@nadia_builds",
    location: "Mombasa, Kenya",
    rating: 5,
    quote:
      "Our hospitality complex was built to international standards by GreenRock. Every detail, from the foundation to finishing, reflects their mastery. Outstanding.",
    product: "Hospitality Complex",
    avatar: "NO",
    avatarColor: "#5c3a1c",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  },
  {
    id: 9,
    name: "Samuel Wanjiku",
    handle: "@sam_w_infra",
    location: "Kisumu, Kenya",
    rating: 5,
    quote:
      "Budget transparency was remarkable — no hidden costs, no surprises. GreenRock delivered our logistics hub exactly on budget with superior quality throughout.",
    product: "Logistics Hub",
    avatar: "SW",
    avatarColor: "#1c3d2a",
    bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80",
  },
  {
    id: 10,
    name: "Aisha Muhammed",
    handle: "@aisha_m_arc",
    location: "Nakuru, Kenya",
    rating: 5,
    quote:
      "From groundbreaking to ribbon-cutting, GreenRock's team was professional and passionate. Our healthcare facility is now a landmark. Truly exceptional work.",
    product: "Healthcare Facility",
    avatar: "AM",
    avatarColor: "#3d1c4a",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#F5A623" : "none"}
          stroke={star <= rating ? "#F5A623" : "#6b7280"}
          strokeWidth="1.5"
          className="flex-shrink-0"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Calculate visible slides count based on viewport
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1.15);
      else if (window.innerWidth < 1024) setVisibleCount(2.2);
      else setVisibleCount(3.4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Track active index based on scroll position
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const cardWidth = track.scrollWidth / testimonials.length;
    const index = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, testimonials.length - 1));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Mouse drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Navigation arrows
  const scrollTo = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / testimonials.length;
    trackRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // Dot navigation
  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / testimonials.length;
    trackRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#f5f6f6] py-16 overflow-hidden">
      {/* ── Community Header (oraimo-style) ── */}
      <div className="px-6 md:px-10 lg:px-16 mb-10">
        <div className="max-w-[1360px] mx-auto">
          {/* Social Handle Row */}
          <div className="flex items-center gap-3 mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#111" stroke="none" />
            </svg>
            <span
              className="text-[#111] font-bold"
              style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
            >
              @greenrocksolutions
            </span>
            <a
              href="#"
              className="ml-2 px-5 py-2 text-sm font-bold text-white bg-[#111] rounded-full hover:bg-[#333] transition-colors duration-200 select-none"
              style={{ letterSpacing: "0.02em" }}
            >
              Follow us
            </a>
          </div>

          {/* Description */}
          <p
            className="text-[#444] leading-relaxed max-w-3xl"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)" }}
          >
            Trusted by hundreds of clients across Kenya, our work speaks for itself. Share your
            GreenRock experience on Instagram using{" "}
            <strong className="text-[#111]">#GreenRockSolutions</strong> and tagging{" "}
            <strong className="text-[#111]">@greenrocksolutions</strong>. We celebrate every
            milestone our clients achieve.{" "}
            <strong className="text-[#111]">Keep Building. Keep Growing.</strong>
          </p>
        </div>
      </div>

      {/* ── Carousel Track ── */}
      <div className="relative" ref={containerRef}>
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f5f6f6] to-transparent z-10 pointer-events-none hidden md:block" />
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f5f6f6] to-transparent z-10 pointer-events-none hidden md:block" />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth select-none"
          style={{
            paddingLeft: "clamp(1.5rem, 4vw, 5rem)",
            paddingRight: "clamp(1.5rem, 4vw, 5rem)",
            paddingBottom: "12px",
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="flex-none bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{
                width: `calc((100vw - clamp(3rem, 8vw, 10rem)) / ${visibleCount})`,
                minWidth: "260px",
                maxWidth: "400px",
              }}
            >
              {/* Top image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={t.bgImage}
                  alt={`${t.name} project`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  draggable={false}
                />
                {/* Product tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-[#111]/80 backdrop-blur-sm rounded-full">
                    {t.product}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <p
                  className="text-[#333] mt-3 mb-4 leading-relaxed line-clamp-3"
                  style={{ fontSize: "0.875rem" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0f0]">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#111] font-bold text-sm leading-tight truncate">
                      {t.name}
                    </p>
                    <p className="text-[#999] text-xs mt-0.5 truncate">
                      {t.handle} · {t.location}
                    </p>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="12" cy="12" r="10" fill="#82e600" />
                      <path
                        d="M8 12l3 3 5-5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Navigation Controls ── */}
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 mt-6">
        <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between">
          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-300 rounded-full flex-shrink-0"
                style={{
                  width: i === activeIndex ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === activeIndex ? "#111" : "#ccc",
                }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("prev")}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-[#111] flex items-center justify-center hover:bg-[#111] hover:text-white text-[#111] transition-all duration-200 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("next")}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white hover:bg-[#333] transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this element */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
