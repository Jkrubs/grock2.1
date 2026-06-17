"use client"
import { Barlow } from "next/font/google";
import { landscapings } from "../assets/assets";
import { equipment_sequence, equipment_hire } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../assets/assets";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function equipments() {
  return (
    <>
    <div className={` ${barlow.className} w-[100%] h-[100vh] flex  items-center bg-[url('/mixer.webp')] bg-center bg-cover bg-no-repeat `}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
      <div className="my-20 mx-5 z-40">
      <h1 className="font-bold text-7xl max-w-4xl" >Your One-Stop Source For All<span className="text-[#FFDF1B]"> Construction Equipments</span></h1>
      <p className="max-w-4xl my-8">Your space doesn&atpos;t need to be torn down to be transformed. As trusted renovation contractors in Kenya, we specialise in giving tired homes and outdated commercial buildings a second life — without the chaos, the surprise costs, or the months of disruption that usually come with renovation work.</p>
      <button  className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] text-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#006330]/50">Hire Equipment Now</button>
      <button  className="bg-[#006330] ml-10 hover:bg-[#004d26] text-white border border-[#FFDF1B] text-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#006330]/50">Call Consultant</button>
      </div>
      </div>
      <div className="mt-20 mx-5">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How We Do It
          </div>
          <h2 className="font-bold text-5xl my-5">Hire the Right Tool For Each Job</h2>
          <p>Every construction project requires the right equipment to achieve the best results efficiently and cost-effectively. From excavators for earthworks and foundation digging to graders for road construction and rollers for compaction, we provide a wide range of reliable machinery tailored to your project&atpos;s specific needs. Our experienced team can help you identify the most suitable equipment, ensuring maximum productivity, reduced downtime, and successful project completion—whether you&atpos;re undertaking a residential build, commercial development, infrastructure project, or land clearing operation anywhere in Kenya.</p>
      </div>
       <div className="mt-10 mx-5 flex justify-between flex-wrap">
                        {equipment_hire.map((process, index) => (
                            <div key={index} className="w-[30%]  my-5 border border-[#008000] flex flex-col justify-between">
                                <div className="w-[100%] h-[250px]">
                                   <Image className="w-[100%] h-[100%] object-cover " src={process.image} alt={process.alt}/>  
                                </div>
                               <div className="p-4">
                                <h3 className="text-3xl mb-3 text-[#FFDF1B]">{process.title}</h3>
                                <div>{process.description}</div>
                                </div>
                                <div className="p-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#FFDF1B] hover:underline"
                                >
                                    Hire Equipment
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
         <div className="mt-20 mx-5">
           <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How it&atpos;s done
          </div>
          <h2 className="font-bold text-5xl my-5">Why Contractors Choose Our Equipment Hire Services</h2>
          <p className="mb-8">Your project&atpos;s success depends on having the right equipment at the right time. We partner with contractors across Kenya to deliver dependable machinery, fast mobilization, and expert support that keeps projects on schedule and within budget. From small residential developments to major infrastructure works, our clients choose us for our well-maintained fleet, transparent pricing, nationwide coverage, and commitment to minimizing downtime. When deadlines matter and reliability is non-negotiable, we&atpos;re the equipment hire partner you can count on.</p>
          <div className="flex flex-wrap gap-[3%]">
                        {equipment_sequence.map((sequence, index) => (
                            <div key={index} className="w-[22%]  mb-3 border rounded-xl p-4">
                                <div className="font-black text-5xl text-[#008000] ">{sequence.id.toString().padStart(2, '0')}</div>
                                <div className="seq-info">
                                    <div className="font-bold text-[#FFDF1B] text-2xl my-5">{sequence.title}</div>
                                    <div>{sequence.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
        </div> 
        {/* <div className="mt-20 mx-5">
          <div className="font-bold text-5xl my-5">Our Custom Home Projects</div>
           <div className="projects-masonry">
                        {projects.map((project, index) => (
                            project.type === 'custom' && (
                                <Link to={`/projects/${project.id}`} key={index} className="project">
                                    <Image src={project.images[0]} alt={project.title} />
                                </Link>
                            )
                        ))}
                    </div>
        </div>           */}
      </>
  )
}
