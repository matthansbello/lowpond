import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Victoria Island Commercial Tower",
      category: "Structural Engineering",
      summary: "A 25-story mixed-use development requiring advanced wind-load analysis and deep pile foundation engineering in coastal soil conditions."
    },
    {
      title: "Lagos-Ibadan Expressway Interchange",
      category: "Civil Infrastructure",
      summary: "Design and supervision of a major arterial interchange, optimizing traffic flow and incorporating advanced stormwater drainage systems."
    },
    {
      title: "National Industrial Park Data Center",
      category: "MEP Systems Integration",
      summary: "Implementation of N+1 redundant cooling and power systems for a Tier-III equivalent data facility, ensuring 99.982% uptime."
    },
    {
      title: "Abuja Heights Residential Complex",
      category: "Project Management",
      summary: "End-to-end management of a 500-unit luxury estate, delivered 2 months ahead of schedule and 5% under budget."
    }
  ];

  return (
    <>
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            align="center"
            heading="Featured Projects"
            subtext="A portfolio of structural resilience and engineering precision."
            className="text-white mx-auto"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-[#E2E8F0] rounded-xl mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-center p-4 transition-transform duration-500 group-hover:scale-105">
                     <span className="text-[#94A3B8] font-medium">Project Image Placeholder</span>
                   </div>
                   <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/10 transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#3B82F6] transition-colors">{project.title}</h3>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-[#0A1628] group-hover:text-[#3B82F6] transition-colors">
                  View Case Study <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
