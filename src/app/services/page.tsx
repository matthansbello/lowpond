import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, ShieldCheck, Globe, PenTool, Hammer, Briefcase, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery, Project } from "@/components/ProjectGallery";

export default function Services() {
  const projects: Project[] = [
    
    {
      title: "GeoSmart Digital Solutions Offices",
      category: "Civil Infrastructure",
      summary: "",
      image: "/images/Lowpond-Construction-1.webp",
      location: "Plateau State, Nigeria",
      year: "2022"
    },
    {
      title: "Industrial Center",
      category: "MEP Systems Integration",
      summary: "",
      image: "/images/Lowpond-Mill-1.webp",
      location: "",
      year: "2024"
    },
    {
      title: "GeoSmart Digital Solutions Entrance",
      category: "Civil Infrastructure",
      summary: "",
      image: "/images/Lowpond-Nig-Ltd-1.webp",
      location: "Jos, Plateau State",
      year: "2023"
    },
    {
      title: "Warehousing",
      category: "Structural Engineering",
      summary: "",
      image: "/images/Lowpond-Construction-2.webp",
      location: "",
      year: "2023"
    },
    {
      title: "Modern Office Complex",
      category: "Project Management",
      summary: "",
      image: "/images/Lowpond-Nig-Ltd-3.webp",
      location: "",
      year: "2024"
    },
    {
      title: "Warehousing",
      category: "Structural Engineering",
      summary: "",
      image: "/images/Lowpond-Nig-Ltd-4.webp",
      location: "",
      year: "2025"
    },
  ];

  const services = [
    {
      id: "quality-management",
      icon: <ShieldCheck className="w-12 h-12 text-[#3B82F6]" />,
      title: "Quality Management",
      description: "Ensuring excellence at every stage. We implement robust quality management systems to guarantee the highest standards in all our engineering and construction projects, from initial design to final delivery."
    },
    {
      id: "building-production",
      icon: <Building2 className="w-12 h-12 text-[#3B82F6]" />,
      title: "Building Production",
      description: "Efficient and quality construction for industrial and commercial growth. We utilise advanced building techniques and a skilled workforce to deliver high-quality construction services that support Nigeria’s industrialisation and commercial development."
    },
    {
      id: "gis-consulting",
      icon: <Globe className="w-12 h-12 text-[#3B82F6]" />,
      title: "GIS Consulting",
      description: "Location intelligence for strategic decisions. Leverage the power of Geographic Information Systems (GIS) for insightful spatial analysis, planning, and management of your industrial and commercial ventures."
    },
    {
      id: "designs",
      icon: <PenTool className="w-12 h-12 text-[#3B82F6]" />,
      title: "Designs",
      description: "Innovative and functional solutions tailored to your needs. Our design team combines creativity and technical expertise to develop cutting-edge architectural and engineering designs for a wide range of industrial and commercial applications."
    },
    {
      id: "steel-structure",
      icon: <Hammer className="w-12 h-12 text-[#3B82F6]" />,
      title: "Steel Structure Design and Construction",
      description: "Strength and precision, built to last. Our expert team delivers innovative and durable steel structures for industrial facilities, commercial buildings, and infrastructure projects, adhering to the strictest safety and quality standards."
    },
    {
      id: "project-management",
      icon: <Briefcase className="w-12 h-12 text-[#3B82F6]" />,
      title: "Project Management",
      description: "Seamless execution from concept to completion. Our experienced project managers provide strategic leadership and meticulous coordination to ensure your industrial and commercial projects are delivered efficiently and effectively."
    },
    {
      id: "building-monitoring",
      icon: <LineChart className="w-12 h-12 text-[#3B82F6]" />,
      title: "Building, Monitoring and Evaluation",
      description: "Delivering success through meticulous oversight. We provide comprehensive building services, coupled with rigorous monitoring and evaluation processes, to ensure projects stay on track, within budget, and meet your exact specifications."
    }
  ];

  return (
    <>
      <PageHero 
        heading="Engineering Services"
        subtext="Comprehensive technical solutions for complex requirements across structural, civil, and industrial engineering."
      />

      {/* Services List */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-start hover:shadow-md transition-shadow duration-300"
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            align="center"
            heading="Featured Projects"
            subtext="A portfolio of structural resilience and engineering precision across West Africa."
            className="mb-16"
          />
          
          <ProjectGallery projects={projects} />
        </div>
      </section>
    </>
  );
}
