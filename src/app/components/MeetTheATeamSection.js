const phoneNumber = "0702044257";

const team = [
  {
    name: "Stephen Gikura",
    role: "Site Supervisor / HSE",
    initials: "SG",
    phone:"0702044257",
    summary:
      "In charge of site personnel, daily site coordination, safety checks, and keeping every crew member aligned with GreenRock's HSE standards.",
  },
  {
    name: "Kaigai Mbote",
    role: "Project Coordinator",
    initials: "KM",
    phone:"0712517880", 
    summary:
      "Coordinates schedules, client updates, materials follow-up, and project documentation so each build keeps moving with clarity.",
  },
  {
    name: "Eng Mbogo",
    role: "Quantity Surveyor",
    initials: "EM",
    phone:"0712517880",
    summary:
      "Supports cost planning, measurements, procurement checks, and budget tracking from estimate stage through project delivery.",
  },
  {
    name: "Gertrude Kamau",
    role: "Client Relations Lead",
    initials: "GK",
    phone:"0717089646",
    summary:
      "Keeps communication smooth between clients and the site team, helping questions, approvals, and updates reach the right people fast.",
  },
];

export default function MeetTheATeamSection() {
  return (
    <section className="bg-[#0b0b0b] px-6 py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFDF1B]">
              Meet The A Team
            </div>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl">
              The people keeping every site moving safely.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            From site safety to project coordination, this team keeps communication, supervision, and accountability close to the work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.role}
              className="group flex min-h-[330px] flex-col justify-between border border-white/10 bg-[#0c0c0c] p-6 shadow-2xl transition-colors hover:border-[#FFDF1B]"
            >
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#FFDF1B] bg-[#006330] text-xl font-black text-white">
                  {member.initials}
                </div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#FFDF1B]">
                  {member.role}
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-[#FFDF1B]">
                  {member.name}
                </h3>
                <p className="text-sm leading-7 text-white/70">{member.summary}</p>
              </div>

              <a
                href={`tel:${member.phone}`}
                className="mt-8 inline-flex items-center justify-center border border-[#FFDF1B] bg-[#006330] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#004d26]"
              >
                Call Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
