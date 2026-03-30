import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Team() {
  const team = [
    {
      name: "Engr. placeholder",
      role: "Managing Director / Principal Engineer",
      bio: "Over 20 years of experience in structural design and large-scale project management across West Africa."
    },
    {
      name: "Engr. placeholder",
      role: "Head of Civil Infrastructure",
      bio: "Specialist in municipal master planning and sustainable urban development frameworks."
    },
    {
      name: "Arch. placeholder",
      role: "Lead MEP Consultant",
      bio: "An expert in energy-efficient systems integration and modern building technologies."
    },
    {
      name: "Ms. placeholder",
      role: "Director of Operations",
      bio: "Ensures seamless execution, procurement efficiency, and rigorous safety compliance on all project sites."
    }
  ];

  return (
    <>
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            align="center"
            heading="Our Leadership Team"
            subtext="The technical minds behind our engineering success."
            className="text-white mx-auto"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-[#E2E8F0] rounded-xl mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                     <span className="text-[#94A3B8] font-medium text-sm">Headshot Placeholder</span>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">{member.name}</h3>
                <p className="text-[#3B82F6] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
