import { PageHero } from "@/components/PageHero";
import { AboutSlider } from "@/components/AboutSlider";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  const testimonials = [
    {
      quote: "LowPond has a great team of professionals who are good at what they do, I had no regrets working with them.",
      name: "John Michael",
      title: "CEO",
      company: "JK Farms"
    },
    // {
    //   quote: "Their project management team operates with military precision. They delivered our industrial facility exactly on schedule despite severe supply chain disruptions.",
    //   name: "Sarah T.",
    //   title: "Chief Executive Officer",
    //   company: "Pan-African Manufacturing"
    // },
    
  ];

  return (
    <>
      <PageHero 
        heading="About LowPond"
        subtext="Building the infrastructure of tomorrow, today through precision engineering and sustainable innovation."
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0F172A]">Our Story</h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Founded with a vision to redefine engineering excellence in Nigeria, LowPond Nigeria Limited has grown from a specialized consultancy into a full-scale infrastructure and construction management firm. 
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                We believe that true engineering perfection lies at the intersection of innovative design, rigorous technical standards, and unwavering dedication to safety and sustainability.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[#E2E8F0] rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
              {/* <span className="text-[#94A3B8] font-medium">Corporate Office Placeholder Image</span> */}
              <AboutSlider />
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1B2A4A] text-white p-12 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver world-class structural and civils engineering solutions that empower communities, drive economic growth, and stand the test of time through precision execution.
              </p>
            </div>
            <div className="bg-[#3B82F6] text-white p-12 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the most trusted name in African infrastructure development, continuously setting new benchmarks for technical innovation and structural perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            align="center"
            heading="Client Testimonials"
            subtext="Proven excellence across diverse engineering disciplines."
            className="mb-16"
          />
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
