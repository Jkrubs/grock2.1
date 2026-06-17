import Link from "next/link";
import { projects } from "../assets/assets";
import Image from "next/image";

export default function FeaturedProjectsSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B] mb-2">
            Portfolio Highlight
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-xs font-bold uppercase tracking-widest text-white-400 hover:text-[#FFDF1B] transition-colors mt-4 md:mt-0 inline-flex items-center"
        >
          View Full Portfolio
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0c0c0c] border border-white/5 group hover:border-[#006330] transition-colors shadow-2xl"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              >
                <Image className="w-[100%] h-[100%] object-cover" src={project.images[0]} alt={project.title}/>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase font-semibold text-gray-500 tracking-wider">
                <span>{project.category}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#FFDF1B] transition-colors">
                {project.title}
              </h3>
              <p className="text-white-400 text-xs">
                {project.overview}
              </p>
              <Link
                href={`/projects/${project.id}`}
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
    </section>
  );
}
