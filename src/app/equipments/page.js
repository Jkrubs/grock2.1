"use client"
import { Barlow } from "next/font/google";
import { equipment_sequence, equipment_hire } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function equipments() {
  return (
    <>
      <div className={`${barlow.className} relative flex min-h-[680px] items-center bg-[url('/mixer.webp')] bg-center bg-cover bg-no-repeat px-5 py-28 sm:px-8 lg:min-h-screen`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Your One-Stop Source For All<span className="text-[#FFDF1B]"> Construction Equipments</span></h1>
          <p className="my-6 max-w-4xl text-sm leading-7 text-white/85 sm:text-base lg:my-8">Your space doesn&atpos;t need to be torn down to be transformed. As trusted renovation contractors in Kenya, we specialise in giving tired homes and outdated commercial buildings a second life — without the chaos, the surprise costs, or the months of disruption that usually come with renovation work.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="bg-[#006330] px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#004d26] hover:shadow-[#006330]/50 border border-[#FFDF1B] sm:px-8">Hire Equipment Now</button>
            <button className="bg-[#006330] px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#004d26] hover:shadow-[#006330]/50 border border-[#FFDF1B] sm:px-8">Call Consultant</button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How We Do It</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Hire the Right Tool For Each Job</h2>
        <p className="max-w-5xl leading-7 text-white/80">Every construction project requires the right equipment to achieve the best results efficiently and cost-effectively. From excavators for earthworks and foundation digging to graders for road construction and rollers for compaction, we provide a wide range of reliable machinery tailored to your project&atpos;s specific needs. Our experienced team can help you identify the most suitable equipment, ensuring maximum productivity, reduced downtime, and successful project completion—whether you&atpos;re undertaking a residential build, commercial development, infrastructure project, or land clearing operation anywhere in Kenya.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-3">
        {equipment_hire.map((process, index) => (
          <div key={index} className="flex flex-col justify-between overflow-hidden border border-[#008000]">
            <div className="h-56 w-full sm:h-64">
              <Image className="h-full w-full object-cover" src={process.image} alt={process.alt} />
            </div>
            <div className="p-4">
              <h3 className="mb-3 text-2xl font-bold leading-tight text-[#FFDF1B] lg:text-3xl">{process.title}</h3>
              <div className="text-sm leading-6 text-white/80">{process.description}</div>
            </div>
            <div className="p-4">
              <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline">
                Hire Equipment
                <svg className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">How it&atpos;s done</div>
        <h2 className="my-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Why Contractors Choose Our Equipment Hire Services</h2>
        <p className="mb-8 max-w-5xl leading-7 text-white/80">Your project&atpos;s success depends on having the right equipment at the right time. We partner with contractors across Kenya to deliver dependable machinery, fast mobilization, and expert support that keeps projects on schedule and within budget. From small residential developments to major infrastructure works, our clients choose us for our well-maintained fleet, transparent pricing, nationwide coverage, and commitment to minimizing downtime. When deadlines matter and reliability is non-negotiable, we&atpos;re the equipment hire partner you can count on.</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {equipment_sequence.map((sequence, index) => (
            <div key={index} className="rounded-xl border border-white/20 p-4">
              <div className="text-4xl font-black text-[#008000] sm:text-5xl">{sequence.id.toString().padStart(2, '0')}</div>
              <div>
                <div className="my-5 text-xl font-bold leading-tight text-[#FFDF1B] sm:text-2xl">{sequence.title}</div>
                <div className="text-sm leading-6 text-white/80">{sequence.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
