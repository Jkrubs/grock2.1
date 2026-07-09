import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { projects, services } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "10+", label: "Experience Years" },
  { value: "7+", label: "Consultation Projects" },
  { value: "5+", label: "Satisfied Clients" },
];

const values = [
  {
    title: "One Accountable Team",
    text: "We coordinate architects, engineers, trades, equipment, and timelines so clients are not left managing five different moving parts alone.",
  },
  {
    title: "Transparent Costs",
    text: "Our work starts with clear scope, site realities, itemised estimates, and practical planning so budgets are controlled before work begins.",
  },
  {
    title: "Built for Handover",
    text: "Quality checks happen throughout the job, not only at the end, with walkthroughs and warranty support after completion.",
  },
];

const imageStack = [
  { src: "/wwa1.webp", alt: "GreenRock construction project site" },
  { src: "/wwa2.webp", alt: "GreenRock construction team at work" },
  { src: "/wwa3.webp", alt: "GreenRock completed development project" },
];

export default function About() {
  return (
    <div className={`${barlow.className} bg-[#0a0a0a]`}>
      <section className="relative flex min-h-[640px] items-center overflow-hidden px-5 py-28 sm:px-8 lg:min-h-screen">
        <Image
          src="/wwa3.webp"
          alt="GreenRock completed development project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">About GreenRock</div>
            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
              Built to change the construction story in Kenya.
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
              GreenRock Solutions is a construction and real estate development firm built for clients who need reliable execution, transparent costs, and a team that stays accountable from first site walk to final handover.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="border border-[#FFDF1B] bg-[#006330] px-7 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#004d26]">
                Build With Us
              </Link>
              <Link href="/projects" className="border border-white/25 px-7 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-[#FFDF1B] hover:text-[#FFDF1B]">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#FFDF1B]/20 bg-gradient-to-r from-[#002b15] to-[#004d26] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="mb-2 text-3xl font-black tracking-tight text-[#FFDF1B] md:text-5xl">{stat.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Who We Are</div>
          <h2 className="mb-6 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            A contractor built around trust, control, and follow-through.
          </h2>
          <div className="space-y-5 text-sm leading-7 text-white/75 sm:text-base">
            <p>
              Most construction horror stories start the same way: a contractor who seemed great on paper, disappeared mid-project, and left someone with a half-built house and an empty account.
            </p>
            <p>
              GreenRock Solutions was started because that story is too common in Kenya&apos;s construction industry. We built a more accountable model with the flexibility to mobilise the right people for each project, protect the client&apos;s bottom line, and use innovation where it helps the work move better.
            </p>
            <p>
              As general contractors in Kenya, we do not just build structures. We build value on time, within cost, and to a standard that holds up long after handover.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {imageStack.map((image, index) => (
            <div key={image.src} className={`relative overflow-hidden border border-white/10 bg-black ${index === 0 ? "col-span-2 h-72" : "h-48 sm:h-64"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/25 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How We Work</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">What clients can expect from us.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border border-white/10 bg-[#0c0c0c] p-6">
                <h3 className="mb-4 text-2xl font-bold text-[#FFDF1B]">{value.title}</h3>
                <p className="text-sm leading-7 text-white/75">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">What We Build</div>
            <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl">Core sectors</h2>
          </div>
          <Link href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline">
            Explore Services
            <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.id} href={service.link} className="group border border-white/10 bg-[#0c0c0c] transition-colors hover:border-[#FFDF1B]">
              <div className="relative h-52 overflow-hidden">
                <Image src={service.image} alt={service.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold uppercase text-white group-hover:text-[#FFDF1B]">{service.name}</h3>
                <p className="text-sm leading-6 text-white/70">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="border border-[#FFDF1B]/30 bg-[#006330] p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Portfolio Proof</div>
              <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">From custom homes to access roads, the work is visible.</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80">Our project record spans residential builds, commercial renovation, cabro installation, landscaping, and infrastructure support.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="relative h-28 overflow-hidden border border-white/10 sm:h-36">
                  <Image src={project.images[0]} alt={project.title} fill sizes="240px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
