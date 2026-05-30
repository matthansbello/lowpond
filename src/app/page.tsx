import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSlider } from "@/components/AboutSlider";
import { ClientMarquee } from "@/components/ClientMarquee";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FEATURED_SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="bg-primary-slate py-12 border-y border-accent-blue/20 relative z-20 -mt-8 mx-4 md:mx-6 lg:mx-auto container rounded-lg shadow-xl mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { label: "Completed Projects", value: "150+" },
            { label: "Expert Engineers", value: "35" },
            { label: "Years of Excellence", value: "20+" },
            { label: "Client Satisfaction", value: "99%" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
              <div className="text-sm font-medium text-metallic uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ClientMarquee />

      <section className="py-24 bg-surface-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading
              eyebrow="Our Expertise"
              heading="Engineering Capabilities"
              subtext="Comprehensive technical solutions for complex infrastructural and mining challenges."
            />
            <Button variant="ghost" className="text-accent-blue hover:bg-blue-50" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-8 border border-gray-100 rounded-xl bg-surface-grey hover:bg-white hover:border-accent-blue/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="text-accent-blue mb-6 relative z-10">
                  <ServiceIcon name={service.icon} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">{service.title}</h3>
                <p className="text-text-muted mb-6 relative z-10">{service.shortDescription}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-sm font-semibold text-primary-navy group-hover:text-accent-blue transition-colors relative z-10"
                >
                  Read More{" "}
                  <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-grey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-primary-navy/10 mix-blend-multiply" />
              <AboutSlider />
            </div>

            <div className="space-y-8">
              <SectionHeading
                eyebrow="About Lowpond"
                heading="Committed to Structural Integrity and Innovation"
                subtext="At Lowpond Nigeria Limited, we bridge the gap between architectural vision and enduring reality. With over 20 years of operational excellence, we have established ourselves as a premier engineering firm in West Africa."
              />
              <ul className="space-y-4">
                {[
                  "Strict adherence to international ISO engineering standards.",
                  "Utilization of advanced BIM (Building Information Modeling) technologies.",
                  "Uncompromising commitment to on-site safety and environmental sustainability.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0 w-6 h-6 text-accent-blue" />
                    <span className="text-text-primary font-medium">{item}</span>
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

      <section className="relative py-24 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Lowpond for your next major infrastructure, mining, or commercial development project.
          </p>
          <Button size="lg" variant="primary" asChild>
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
