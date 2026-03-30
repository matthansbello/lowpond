import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, HardHat, Ruler, Pickaxe } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "structural",
      icon: <Building2 className="w-12 h-12 text-[#3B82F6]" />,
      title: "Structural Engineering",
      description: "From towering commercial high-rises to specialized industrial facilities, our structural designs prioritize safety, material efficiency, and architectural integrity. We utilize advanced FEA (Finite Element Analysis) to ensure comprehensive load balancing."
    },
    {
      id: "infrastructure",
      icon: <Ruler className="w-12 h-12 text-[#3B82F6]" />,
      title: "Infrastructure Design",
      description: "Master planning and technical design for municipal infrastructure, including highways, bridges, drainage systems, and water treatment facilities. We focus on resilient, climate-adaptive engineering."
    },
    {
      id: "mep",
      icon: <Pickaxe className="w-12 h-12 text-[#3B82F6]" />,
      title: "MEP Systems Integration",
      description: "Mechanical, Electrical, and Plumbing engineering integrated seamlessly into the structural core. We deliver energy-efficient HVAC designs, reliable power distribution networks, and sustainable plumbing systems."
    },
    {
      id: "project-management",
      icon: <HardHat className="w-12 h-12 text-[#3B82F6]" />,
      title: "Project Management",
      description: "Comprehensive oversight from groundbreaking to handover. Our project managers employ Lean Construction principles to optimize resource allocation, strictly adhere to timelines, and enforce uncompromising safety standards."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            align="center"
            heading="Engineering Services"
            subtext="Comprehensive technical solutions for complex requirements."
            className="text-white mx-auto"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-start"
              >
                <div className="bg-blue-50 p-6 rounded-xl shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-4">{service.title}</h2>
                  <p className="text-lg text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
