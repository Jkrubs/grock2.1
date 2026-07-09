import { Barlow } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function Projects() {

  return (
    <>
      <div className={`${barlow.className} pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto flex flex-col`}>
        <h1 className="mb-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          <span className="text-[#FFDF1B]">Building the future </span>of the construction industry, one project at a time
        </h1>
        <p className="max-w-4xl leading-7 text-gray-400">
          Seeing is believing. Your project can make or break your reputation and bottom line. We get it. That&atpos;s why we serve as your project partner and guide, every step of the way. Lending decades of expertise, our established teams have created a sustainable framework for success.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0c0c0c] border border-white/5 group hover:border-[#006330] transition-colors shadow-2xl"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105">
                <Image className="w-full h-full object-cover" src={project.images[0]} alt={project.title}/>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex flex-wrap justify-between gap-2 text-[10px] uppercase font-semibold text-gray-500 tracking-wider">
                <span>{project.category}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#FFDF1B] transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 text-xs leading-6">
                {project.overview}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline"
              >
                View Project
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
    </>
  );
}
