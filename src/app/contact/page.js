import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";
import { services } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const contactCards = [
  {
    label: "Email",
    value: "info@greenrock.co.ke",
    href: "mailto:info@greenrock.co.ke",
  },
  {
    label: "Project Types",
    value: "Builds, remodels, cabro, landscaping, equipment hire",
    href: "/services",
  },
  {
    label: "Coverage",
    value: "Construction support across Kenya",
    href: "/projects",
  },
];

const checklist = [
  "Project location or site area",
  "Service needed and expected scope",
  "Target timeline or handover date",
  "Budget range, drawings, or photos if available",
];

export default function Contact() {
  return (
    <div className={`${barlow.className} bg-[#0a0a0a]`}>
      <section className="relative flex min-h-[560px] items-center overflow-hidden px-5 py-28 sm:px-8 lg:min-h-[680px]">
        <Image
          src="/ndumberi.webp"
          alt="GreenRock construction project in Kiambu"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Contact GreenRock</div>
            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
              Tell us what you want to build, improve, or equip.
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
              Share your project details and GreenRock Solutions will help you understand the practical next step, from site assessment and costing to execution planning.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-24">
        <div className="border border-white/10 bg-[#0c0c0c] p-5 sm:p-8 lg:p-10">
          <div className="mb-8">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Project Inquiry</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">Send us the brief.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              This form opens your email app with the message addressed to GreenRock. You can review and attach files before sending.
            </p>
          </div>

          <form
            action="mailto:info@greenrock.co.ke"
            method="post"
            encType="text/plain"
            className="grid grid-cols-1 gap-5"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Full Name</span>
                <input
                  required
                  type="text"
                  name="Full name"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Email Address</span>
                <input
                  required
                  type="email"
                  name="Email"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Phone Number</span>
                <input
                  type="tel"
                  name="Phone"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                  placeholder="+254..."
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Project Location</span>
                <input
                  type="text"
                  name="Project location"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                  placeholder="County, town, or site area"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Service Needed</span>
                <select
                  name="Service needed"
                  defaultValue=""
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#FFDF1B]"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name} className="bg-[#0a0a0a] text-white">
                      {service.name}
                    </option>
                  ))}
                  <option value="Consultation" className="bg-[#0a0a0a] text-white">Consultation</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Timeline</span>
                <input
                  type="text"
                  name="Timeline"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                  placeholder="Urgent, 1-3 months, planning stage..."
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/70">Project Details</span>
              <textarea
                required
                name="Project details"
                rows="7"
                className="w-full resize-y border border-white/15 bg-black/40 px-4 py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FFDF1B]"
                placeholder="Tell us what you want done, what exists on site, and any budget or design details you already have."
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="border border-[#FFDF1B] bg-[#006330] px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#004d26]"
              >
                Email GreenRock
              </button>
              <a href="mailto:info@greenrock.co.ke" className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline">
                info@greenrock.co.ke
              </a>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="border border-[#FFDF1B]/30 bg-[#006330] p-6 sm:p-8">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Direct Contact</div>
            <h2 className="text-3xl font-bold uppercase leading-tight text-white">Ready when the site is.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Send drawings, site photos, measurements, or a short brief by email. The more context you share, the easier it is to advise on scope and next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactCards.map((card) => (
              <Link key={card.label} href={card.href} className="group border border-white/10 bg-[#0c0c0c] p-5 transition-colors hover:border-[#FFDF1B]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/45">{card.label}</div>
                <div className="mt-2 text-lg font-bold text-white group-hover:text-[#FFDF1B]">{card.value}</div>
              </Link>
            ))}
          </div>

          <div className="border border-white/10 bg-black/25 p-6 sm:p-8">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">Before You Send</div>
            <h3 className="mb-5 text-2xl font-bold uppercase text-white">Helpful details to include</h3>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-[#FFDF1B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
