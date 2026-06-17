import Link from "next/link";
import { services } from "../assets/assets";
import Image from "next/image";

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="max-w-xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B] mb-2">
            Core Sectors
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tight">
            What We Build
          </h2>
        </div>
        <p className="text-white-400 max-w-md mt-4 md:mt-0 text-sm">
          Whether it&apos;s iconic commercial towers, vital infrastructure networks, or massive heavy
          industrial complexes, we construct the foundations of modern communities.
        </p>
      </div>

      <div className="flex flex-wrap justify-between">
        {services.map((sector, idx) => (
          <div
            key={idx}
            className="relative h-[350px] w-[48%]  overflow-hidden border border-white/10 flex flex-col justify-end p-8 shadow-xl my-4"
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-0"
              style={{ backgroundImage: `url('${sector.image}')` }}
            >
            
            <Image src={sector.image} alt={sector.name} className="w-[100%] h-[100%] object-cover"/>

            </div>
            <div className="absolute  inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-0" />
            <div className="absolute  inset-0 bg-[#006330]/80 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute  inset-0 bg-gradient-to-t from-[#001c0d] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFDF1B]">
                Sector {idx + 1}
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-1 mb-3">
                {sector.name}
              </h3>
              <p className="text-white-300 z-40 text-xs leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[450px] group-hover:mb-4">
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
