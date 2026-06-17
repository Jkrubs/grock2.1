const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "10+", label: "Experience Years" },
  { value: "7+", label: "Consultation Projects" },
  { value: "5+", label: "Satisfied Clients" },
];

export default function TrustStatsSection() {
  return (
    <section className="bg-gradient-to-r from-[#002b15] to-[#004d26] border-y border-[#FFDF1B]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black text-[#FFDF1B] tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
