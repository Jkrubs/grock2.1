"use client"
import { Barlow } from "next/font/google";
import { residential_process } from "../assets/assets";
import { sequences } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../assets/assets";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function custom() {
  return (
    <>
    <div className={` ${barlow.className} w-[100%] h-[100vh] flex  items-center bg-[url('/ndumberi.webp')] bg-center bg-cover bg-no-repeat `}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
      <div className="my-20 mx-5 z-40">
      <h1 className="font-bold text-7xl max-w-4xl" ><span className="text-[#FFDF1B]">General Contracting </span>and Home Building Services in Kenya</h1>
      <p className="max-w-4xl mt-8">When you need a reliable general contractor in Kenya who can take your project from bare ground to finished building without you chasing five different people, this is what we do best. As one of Kenya&atpos;s leading construction contractors, general contracting is the backbone of GreenRock Solutions — we coordinate the architects, the engineers, the trades, and the timeline, so you only ever have one number to call.</p>
      </div>
      </div>
      <div className="mt-20 mx-5">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How We Do It
          </div>
          <h2 className="font-bold text-5xl my-5">Our Custom Home Building Process</h2>
          <p>Every general contracting project with GreenRock Solutions follows a process built to remove the guesswork that gives Kenyan construction its bad reputation. We start by walking your site and listening to your vision, your budget, and your timeline  before a single drawing is made. From there, our architects and engineers develop detailed construction plans, and you receive a fully itemised quote so you know exactly what you&atpos;re paying for and why. Once permits and approvals are secured, our experienced construction teams break ground, with weekly progress updates keeping you informed every step of the way  not just at the milestones that make us look good. As your trusted general contractor in Kenya, we run multiple quality checkpoints throughout the build, not just at the end, catching issues while they&atpos;re still cheap to fix. When the project wraps, you get a final walkthrough, a comprehensive warranty, and  unlike too many building contractors in Kenya  a team that still picks up the phone long after handover.</p>
      </div>
       <div className="mt-10 mx-5 flex justify-between flex-wrap">
                        {residential_process.map((process, index) => (
                            <div key={index} className="w-[24%] h-[200px] my-5 border rounded-xl p-2">
                                <h3 className="text-3xl mb-3 text-[#FFDF1B]">{process.title}</h3>
                                <div>{process.content}</div>
                                {/* <div>Duration: {process.duration}</div> */}
                            </div>
                        ))}
                    </div>
         <div className="mt-20 mx-5">
           <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How it&atpos;s done
          </div>
          <h2 className="font-bold text-5xl my-5">Our Sequence Of Work</h2>
          <div className="flex flex-wrap justify-between">
                        {sequences.map((sequence, index) => (
                            <div key={index} className="w-[22%] h-[250px] mb-3 border rounded-xl p-4">
                                <div className="font-black text-5xl text-[#008000] ">{sequence.id.toString().padStart(2, '0')}</div>
                                <div className="seq-info">
                                    <div className="font-bold text-[#FFDF1B] text-2xl my-5">{sequence.name}</div>
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
