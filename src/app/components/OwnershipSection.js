import Image from "next/image";
import { ndumberi } from "../assets/assets";

export default function OwnershipSection() {
  return (
    <section id="about" className="bg-[#0b0b0b] py-24 px-6 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] md:h-[500px] border border-white/10 p-2 bg-black/40">
          <div
            className="w-full h-full bg-cover bg-center"
            
          >
            <Image className="w-[100%] h-[100%] object-cover" src={ndumberi} alt="Ndumberi Project"/>
          </div>
          <div className="absolute -top-4 -left-4 z-20 h-[20%] w-[20%] border-t-[10px] border-l-[10px] border-[#FFDF1B]" />
          <div className="absolute -bottom-4 -right-4 z-20 h-[20%] w-[20%] border-b-[10px] border-r-[10px] border-[#006330]" />
        </div>

        <div className="space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white leading-none">
            Stunning structures, sustainably built
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Greenrock's network of construction professionals rise to the challenges associated with a diverse buildings portfolio, bringing added value to every educational, institutional, residential and commercial construction project. Greenrock offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our safety performance index sits 4x better than the industry average. We don&apos;t just
            build structures; we build security, value, and lasting client trust.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-[#006330] pl-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                Industrial Modular
              </h4>
              <p className="text-gray-400 text-xs">
                Accelerating timelines by pre-fabricating complex steel structures off-site.
              </p>
            </div>
            <div className="border-l-2 border-[#006330] pl-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                IoT Site Analytics
              </h4>
              <p className="text-gray-400 text-xs">
                Utilizing smart concrete sensors and real-time site telemetry for quality control.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="/services"
              className="inline-flex bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
            >
              Learn More About Our Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
