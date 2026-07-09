import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { equipment_hire, processes, projects, services } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const serviceHighlights = [
  "Residential construction and custom homes",
  "Whole-home remodels and commercial renovations",
  "Cabro installation, access roads, and landscaping",
  "Construction equipment hire and site support",
];

export default function Services() {
  return (
    <div className={`${barlow.className} bg-[#0a0a0a]`}>
      <section className="relative flex min-h-[640px] items-center overflow-hidden px-5 py-28 sm:px-8 lg:min-h-screen">
        <Image
          src="/custom.webp"
          alt="GreenRock custom construction project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Services</div>
            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
              Construction services built around one accountable partner.
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
              From ground-up builds to renovation, landscaping, cabro works, and equipment hire, GreenRock Solutions brings the people, planning, and site control needed to move projects from idea to handover.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div key={item} className="border border-white/15 bg-black/35 px-4 py-3 text-sm font-semibold text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Core Services</div>
          <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Choose the service route that matches your project.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
            Each service page goes deeper into process, sequencing, and what the work looks like on site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Link key={service.id} href={service.link} className="group relative flex min-h-[340px] overflow-hidden border border-white/10 p-6 shadow-xl sm:p-8">
              <Image src={service.image} alt={service.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
              <div className="absolute inset-0 bg-[#006330]/70 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 mt-auto max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFDF1B]">Service {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-2xl font-bold uppercase text-white sm:text-3xl">{service.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/80">{service.description}</p>
                <span className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
                  View Service
                  <svg className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/25 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Our Method</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">Plan clearly. Build carefully. Hand over properly.</h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              The same operating rhythm supports our custom homes, remodels, landscaping work, and site support services: understand the property, plan the work, execute with discipline, and close out with accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {processes.map((step) => (
              <div key={step.id} className="rounded-xl border border-white/10 bg-[#0c0c0c] p-5">
                <div className="mb-4 text-4xl font-black text-[#008000]">{String(step.id).padStart(2, "0")}</div>
                <h3 className="mb-3 text-2xl font-bold text-[#FFDF1B]">{step.title}</h3>
                <p className="text-sm leading-7 text-white/75">{step.process}</p>
                <div className="mt-5 inline-flex border border-[#FFDF1B]/40 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#FFDF1B]">
                  {step.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Equipment Hire</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">Machinery support for site productivity.</h2>
          </div>
          <Link href="/equipments" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline">
            Explore Equipment
            <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {equipment_hire.map((item) => (
            <div key={item.id} className="overflow-hidden border border-[#008000] bg-[#0c0c0c]">
              <div className="relative h-56 sm:h-64">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-bold leading-tight text-[#FFDF1B]">{item.title}</h3>
                <p className="text-sm leading-7 text-white/75">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#006330] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Project Experience</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">Services proven across real project types.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="border border-white/10 bg-black/20">
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.images[0]} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/65">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{project.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="border border-[#FFDF1B]/30 bg-[#0c0c0c] p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Start A Project</div>
              <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">Need the right construction partner?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">Share the site, scope, budget, and timeline. GreenRock will help you understand the practical path forward.</p>
            </div>
            <Link href="/contact" className="border border-[#FFDF1B] bg-[#006330] px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#004d26]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
