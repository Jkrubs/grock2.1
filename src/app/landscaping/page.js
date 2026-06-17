"use client"
import { Barlow } from "next/font/google";
import { landscapings } from "../assets/assets";
import { landscapingSequences } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../assets/assets";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
export default function landscaping() {
  return (
    <>
    <div className={` ${barlow.className} w-[100%] h-[100vh] flex  items-center bg-[url(&atpos;/cabro3.webp&atpos;)] bg-center bg-cover bg-no-repeat `}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
      <div className="my-20 mx-5 z-40">
      <h1 className="font-bold text-7xl max-w-4xl" ><span className="text-[#FFDF1B]">Cabro layers </span>and Landscaping Contractors in  Kenya</h1>
      <p className="max-w-4xl mt-8">Your space doesn&atpos;t need to be torn down to be transformed. As trusted renovation contractors in Kenya, we specialise in giving tired homes and outdated commercial buildings a second life — without the chaos, the surprise costs, or the months of disruption that usually come with renovation work.</p>
      </div>
      </div>
      <div className="mt-20 mx-5">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How We Do It
          </div>
          <h2 className="font-bold text-5xl my-5">Our Custom Home Building Process</h2>
          <p>Renovating an existing space comes with its own set of challenges, and our process is built around that reality. We begin with a thorough assessment, inspecting the existing structure, systems, and any hidden issues before we promise anything. From there, we develop renovation solutions that work within your building&atpos;s constraints rather than fighting against them, and we put together a detailed proposal with transparent pricing covering the full scope of work. Once you approve the plan, we handle any required permits and coordinate logistics to keep disruption to a minimum, whether you&atpos;re living in the home or running a business out of it. Our experienced crews then carry out the renovation efficiently, with attention to quality and cleanliness throughout. We close out every project with a final inspection, a proper clean up, and a walkthrough to confirm you&atpos;re completely satisfied with the result</p>
      </div>
       <div className="mt-10 mx-5 flex justify-between flex-wrap">
                        {landscapings.map((process, index) => (
                            <div key={index} className="w-[24%] h-[200px] my-5 border rounded-xl p-2">
                                <h3 className="text-3xl mb-3 text-[#FFDF1B]">{process.name}</h3>
                                <div>{process.description}</div>
                                {/* <div>Duration: {process.duration}</div> */}
                            </div>
                        ))}
                    </div>
         <div className="mt-20 mx-5">
           <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            How it&atpos;s done
          </div>
          <h2 className="font-bold text-5xl my-5">Our Sequence Of Work</h2>
          <p>We start by assessing what&atpos;s already there, the structure, the systems, the constraints we have to work within. From that, we put together renovation plans and a transparent quote, so there&atpos;s no scope creep once work begins. We handle any permits your county requires, then move into execution, working in phases where possible to keep your home or business livable throughout. Every renovation gets the same quality checks as a new build, because half measures on an upgrade aren&atpos;t really an upgrade. When we&atpos;re done, we walk the space with you, clean up properly, and stand behind the work with a warranty, just like we do on every project.</p>
          <div className="flex flex-wrap gap-[3%]">
                        {landscapingSequences.map((sequence, index) => (
                            <div key={index} className="w-[22%] h-[250px] mb-3 border rounded-xl p-4">
                                <div className="font-black text-5xl text-[#008000] ">{sequence.id.toString().padStart(2, &atpos;0&atpos;)}</div>
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
                            project.type === &atpos;custom&atpos; && (
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
