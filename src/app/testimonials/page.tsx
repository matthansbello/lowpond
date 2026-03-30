import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "LowPond's structural analysis for our coastal development was flawless. Their understanding of harsh environmental variables saved us millions in long-term maintenance.",
      name: "Engr. Adebayo O.",
      title: "Director of Operations",
      company: "Westgate Real Estate"
    },
    {
      quote: "Their project management team operates with military precision. They delivered our industrial facility exactly on schedule despite severe supply chain disruptions.",
      name: "Sarah T.",
      title: "Chief Executive Officer",
      company: "Pan-African Manufacturing"
    },
    {
      quote: "The MEP integration provided by LowPond cut our facility energy costs by 22%. Their engineers are forward-thinking and technically brilliant.",
      name: "Dr. Kemi M.",
      title: "Facilities Director",
      company: "National Medical Center"
    },
    {
      quote: "When dealing with complex civil infrastructure, precision is non-negotiable. LowPond is the only firm we trust for our major municipal contracts.",
      name: "Hon. Ibrahim M.",
      title: "Commissioner",
      company: "State Ministry of Works"
    }
  ];

  return (
    <>
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            align="center"
            heading="Client Testimonials"
            subtext="Proven excellence across diverse engineering disciplines."
            className="text-white mx-auto"
          />
        </div>
      </section>

      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#3B82F6] opacity-10" />
                <p className="text-xl text-[#0F172A] leading-relaxed mb-8 italic relative z-10">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-500 text-sm font-medium">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A]">{item.name}</div>
                    <div className="text-sm text-[#64748B]">{item.title}, <span className="text-[#3B82F6]">{item.company}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
