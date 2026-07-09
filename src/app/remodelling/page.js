"use client"
import { Barlow } from "next/font/google";
import { renovations } from "../assets/assets";
import { renovationsSequences } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function remodelling() {
  return (
    <>
      <div className={`${barlow.className} relative flex min-h-[640px] items-center bg-[url('/renovations.webp')] bg-center bg-cover bg-no-repeat px-5 py-28 sm:px-8 lg:min-h-screen`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"><span className="text-[#FFDF1B]">Whole Home Remodels </span>and Renovations Contractors in Nairobi Kenya</h1>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/85 sm:text-base lg:mt-8">Your space doesn&atpos;t need to be torn down to be transformed. As trusted renovation contractors in Kenya, we specialise in giving tired homes and outdated commercial buildings a second life — without the chaos, the surprise costs, or the months of disruption that usually come with renovation work.</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How We Do It</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Our Custom Home Building Process</h2>
        <p className="max-w-5xl leading-7 text-white/80">Renovating an existing space comes with its own set of challenges, and our process is built around that reality. We begin with a thorough assessment, inspecting the existing structure, systems, and any hidden issues before we promise anything. From there, we develop renovation solutions that work within your building&atpos;s constraints rather than fighting against them, and we put together a detailed proposal with transparent pricing covering the full scope of work. Once you approve the plan, we handle any required permits and coordinate logistics to keep disruption to a minimum, whether you&atpos;re living in the home or running a business out of it. Our experienced crews then carry out the renovation efficiently, with attention to quality and cleanliness throughout. We close out every project with a final inspection, a proper clean up, and a walkthrough to confirm you&atpos;re completely satisfied with the result</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {renovations.map((process, index) => (
          <div key={index} className="min-h-[180px] rounded-xl border border-white/20 p-4">
            <h3 className="mb-3 text-2xl font-bold leading-tight text-[#FFDF1B] lg:text-3xl">{process.name}</h3>
            <div className="text-sm leading-6 text-white/80">{process.description}</div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How it&atpos;s done</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Our Sequence Of Work</h2>
        <p className="mb-8 max-w-5xl leading-7 text-white/80">We start by assessing what&atpos;s already there, the structure, the systems, the constraints we have to work within. From that, we put together renovation plans and a transparent quote, so there&atpos;s no scope creep once work begins. We handle any permits your county requires, then move into execution, working in phases where possible to keep your home or business livable throughout. Every renovation gets the same quality checks as a new build, because half measures on an upgrade aren&atpos;t really an upgrade. When we&atpos;re done, we walk the space with you, clean up properly, and stand behind the work with a warranty, just like we do on every project.</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {renovationsSequences.map((sequence, index) => (
            <div key={index} className="min-h-[250px] rounded-xl border border-white/20 p-4">
              <div className="text-4xl font-black text-[#008000] sm:text-5xl">{sequence.id.toString().padStart(2, "0")}</div>
              <div>
                <div className="my-5 text-xl font-bold leading-tight text-[#FFDF1B] sm:text-2xl">{sequence.name}</div>
                <div className="text-sm leading-6 text-white/80">{sequence.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
