import Image from "next/image";
import { Link } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            heading="About LowPond"
            subtext="Building the infrastructure of tomorrow, today."
            className="text-white"
          />
        </div>
      </section>

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
              <span className="text-[#94A3B8] font-medium">Corporate Office Placeholder Image</span>
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
    </>
  );
}
