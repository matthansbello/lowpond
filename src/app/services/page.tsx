import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function Services() {
  return (
    <>
      <PageHero
        heading="Engineering Services"
        subtext="Comprehensive technical solutions for structural, civil, industrial, and mining engineering requirements."
      />

      <section className="py-24 bg-surface-grey">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-16">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-start hover:shadow-md transition-shadow duration-300 scroll-mt-28"
              >
                <div className="bg-blue-50 p-6 rounded-xl shrink-0">
                  <ServiceIcon name={service.icon} className="w-12 h-12 text-accent-blue" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-text-muted leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            align="center"
            heading="Featured Projects"
            subtext="A portfolio of structural resilience and engineering precision across West Africa."
            className="mb-16"
          />

          <ProjectGallery projects={FEATURED_PROJECTS} />
        </div>
      </section>
    </>
  );
}
