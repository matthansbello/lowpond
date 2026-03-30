import Link from "next/link";
import { ArrowRight, Building2, HardHat, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A1628] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Precision-Engineered Solutions for Nigeria's <span className="text-[#3B82F6]">Infrastructure Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              LowPond Nigeria Limited delivers structurally sound, technically advanced engineering solutions—built with exacting standards, delivered on schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" asChild>
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#1B2A4A] py-12 border-y border-[#3B82F6]/20 relative z-20 -mt-8 mx-4 md:mx-6 lg:mx-auto container rounded-lg shadow-xl mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { label: "Completed Projects", value: "150+" },
            { label: "Expert Engineers", value: "45" },
            { label: "Years of Excellence", value: "12" },
            { label: "Client Satisfaction", value: "99%" }
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
              <div className="text-sm font-medium text-[#94A3B8] uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading 
              eyebrow="Our Expertise"
              heading="Engineering Capabilities"
              subtext="Comprehensive technical solutions for complex infrastructural challenges."
            />
            <Button variant="ghost" className="text-[#3B82F6] hover:bg-blue-50" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Building2 className="w-10 h-10" />, 
                title: "Structural Engineering", 
                desc: "Advanced structural analysis and robust design for commercial and industrial facilities." 
              },
              { 
                icon: <HardHat className="w-10 h-10" />, 
                title: "Project Management", 
                desc: "End-to-end execution, ensuring timelines, technical standards, and safety compliance." 
              },
              { 
                icon: <Ruler className="w-10 h-10" />, 
                title: "Civil Infrastructure", 
                desc: "Master planning and construction of roads, bridges, and municipal civil works." 
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-gray-100 rounded-xl bg-[#F1F5F9] hover:bg-white hover:border-[#3B82F6]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="text-[#3B82F6] mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 relative z-10">{service.title}</h3>
                <p className="text-[#64748B] mb-6 relative z-10">{service.desc}</p>
                <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center text-sm font-semibold text-[#0A1628] group-hover:text-[#3B82F6] transition-colors relative z-10">
                  Read More <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-[#0A1628]/10 mix-blend-multiply" />
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300">
                <span className="font-medium flex flex-col items-center gap-2">
                  <ShieldCheck className="w-12 h-12 text-gray-400" />
                  Engineering Facility Placeholder
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              <SectionHeading 
                eyebrow="About LowPond"
                heading="Committed to Structural Integrity and Innovation"
                subtext="At LowPond Nigeria Limited, we bridge the gap between architectural vision and enduring reality. With over a decade of operational excellence, we have established ourselves as a premier engineering firm in West Africa."
              />
              <ul className="space-y-4">
                {[
                  "Strict adherence to international ISO engineering standards.",
                  "Utilization of advanced BIM (Building Information Modeling) technologies.",
                  "Uncompromising commitment to on-site safety and environmental sustainability."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0 w-6 h-6 text-[#3B82F6]" />
                    <span className="text-[#0F172A] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with LowPond for your next major infrastructure or commercial development project.
          </p>
          <Button size="lg" variant="primary" asChild>
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
