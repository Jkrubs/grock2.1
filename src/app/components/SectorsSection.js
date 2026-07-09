import Link from "next/link";
import { services } from "../assets/assets";
import Image from "next/image";

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B] mb-2">
            Core Sectors
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tight">
            What We Build
          </h2>
        </div>
        <p className="text-white/70 max-w-md text-sm leading-6">
          Whether it&apos;s iconic commercial towers, vital infrastructure networks, or massive heavy
          industrial complexes, we construct the foundations of modern communities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {services.map((sector, idx) => (
          <div
            key={idx}
            className="group relative flex min-h-[320px] overflow-hidden border border-white/10 p-5 shadow-xl sm:min-h-[350px] sm:p-8"
          >
            <div className="absolute inset-0">
              <Image src={sector.image} alt={sector.name} className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-[#006330]/80 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001c0d] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFDF1B]">
                Sector {idx + 1}
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-1 mb-3">
                {sector.name}
              </h3>
              <p className="z-40 mb-4 max-w-xl text-xs leading-relaxed text-white/80 sm:mb-0 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:mb-4 sm:group-hover:max-h-[450px] sm:group-hover:opacity-100">
                {sector.description}
              </p>
              <Link
                href={sector.link}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline"
              >
                Explore Projects
                <svg
                  className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
