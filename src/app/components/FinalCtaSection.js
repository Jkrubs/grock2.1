export default function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#00170a] to-[#002b15] border-t border-[#FFDF1B] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
          Ready to Work Together?
        </div>
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
          Let&apos;s build success.
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Partner with a construction services provider that is aligned with your goals, dedicated
          to safety, and owned by the people on your site.
        </p>
        <div className="pt-6 flex justify-center space-x-4">
          <a
            href="/contact"
            className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
          >
            Build a Project With Us
          </a>
          <a
            href="/services"
            className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Our Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
