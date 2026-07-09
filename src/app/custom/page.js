"use client"
import { Barlow } from "next/font/google";
import { residential_process } from "../assets/assets";
import { sequences } from "../assets/assets";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function custom() {
  return (
    <>
      <div className={`${barlow.className} relative flex min-h-[640px] items-center bg-[url('/ndumberi.webp')] bg-center bg-cover bg-no-repeat px-5 py-28 sm:px-8 lg:min-h-screen`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"><span className="text-[#FFDF1B]">General Contracting </span>and Home Building Services in Kenya</h1>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/85 sm:text-base lg:mt-8">When you need a reliable general contractor in Kenya who can take your project from bare ground to finished building without you chasing five different people, this is what we do best. As one of Kenya&atpos;s leading construction contractors, general contracting is the backbone of GreenRock Solutions — we coordinate the architects, the engineers, the trades, and the timeline, so you only ever have one number to call.</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How We Do It</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Our Custom Home Building Process</h2>
        <p className="max-w-5xl leading-7 text-white/80">Every general contracting project with GreenRock Solutions follows a process built to remove the guesswork that gives Kenyan construction its bad reputation. We start by walking your site and listening to your vision, your budget, and your timeline before a single drawing is made. From there, our architects and engineers develop detailed construction plans, and you receive a fully itemised quote so you know exactly what you&atpos;re paying for and why. Once permits and approvals are secured, our experienced construction teams break ground, with weekly progress updates keeping you informed every step of the way not just at the milestones that make us look good. As your trusted general contractor in Kenya, we run multiple quality checkpoints throughout the build, not just at the end, catching issues while they&atpos;re still cheap to fix. When the project wraps, you get a final walkthrough, a comprehensive warranty, and unlike too many building contractors in Kenya a team that still picks up the phone long after handover.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-8 xl:grid-cols-4">
        {residential_process.map((process, index) => (
          <div key={index} className="min-h-[200px] rounded-xl border border-white/20 p-4">
            <h3 className="mb-3 text-2xl font-bold leading-tight text-[#FFDF1B] lg:text-3xl">{process.title}</h3>
            <div className="text-sm leading-6 text-white/80">{process.content}</div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How it&atpos;s done</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Our Sequence Of Work</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {sequences.map((sequence, index) => (
            <div key={index} className="min-h-[250px] rounded-xl border border-white/20 p-4">
              <div className="text-4xl font-black text-[#008000] sm:text-5xl">{sequence.id.toString().padStart(2, '0')}</div>
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
