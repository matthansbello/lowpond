export type ServiceIconName =
  | "shield"
  | "building"
  | "globe"
  | "pen"
  | "hammer"
  | "briefcase"
  | "chart"
  | "pickaxe";

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: ServiceIconName;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "quality-management",
    title: "Quality Management",
    shortDescription:
      "Ensuring excellence at every stage with robust quality management systems for projects.",
    description:
      "Ensuring excellence at every stage. We implement robust quality management systems to guarantee the highest standards in all our engineering and construction projects, from initial design to final delivery.",
    icon: "shield",
    featured: true,
  },
  {
    id: "building-production",
    title: "Building Production",
    shortDescription:
      "Efficient and quality construction for industrial and commercial growth across Nigeria.",
    description:
      "Efficient and quality construction for industrial and commercial growth. We utilise advanced building techniques and a skilled workforce to deliver high-quality construction services that support Nigeria's industrialisation and commercial development.",
    icon: "building",
    featured: true,
  },
  {
    id: "gis-consulting",
    title: "GIS Consulting",
    shortDescription:
      "Location intelligence and spatial analysis for strategic industrial and commercial decisions.",
    description:
      "Location intelligence for strategic decisions. Leverage the power of Geographic Information Systems (GIS) for insightful spatial analysis, planning, and management of your industrial and commercial ventures.",
    icon: "globe",
    featured: true,
  },
  {
    id: "mining-mineral-activities",
    title: "Mining & Mineral Activities",
    shortDescription:
      "Engineering support for mining sites, mineral processing facilities, and compliant extraction operations.",
    description:
      "Comprehensive engineering support for mining and mineral extraction projects. We deliver site infrastructure, haul roads, processing plant foundations, workshop and accommodation facilities, environmental monitoring structures, and geotechnical assessments tailored to active mining operations. Our team works around the full mining lifecycle — from exploration support and site establishment through production, maintenance, and rehabilitation — ensuring safety, regulatory compliance, and operational efficiency at every stage.",
    icon: "pickaxe",
    featured: true,
  },
  {
    id: "designs",
    title: "Designs",
    shortDescription:
      "Innovative architectural and engineering designs for industrial and commercial applications.",
    description:
      "Innovative and functional solutions tailored to your needs. Our design team combines creativity and technical expertise to develop cutting-edge architectural and engineering designs for a wide range of industrial and commercial applications.",
    icon: "pen",
  },
  {
    id: "steel-structure",
    title: "Steel Structure Design and Construction",
    shortDescription:
      "Durable steel structures for industrial facilities, commercial buildings, and infrastructure.",
    description:
      "Strength and precision, built to last. Our expert team delivers innovative and durable steel structures for industrial facilities, commercial buildings, and infrastructure projects, adhering to the strictest safety and quality standards.",
    icon: "hammer",
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDescription:
      "Strategic leadership and coordination from concept to completion.",
    description:
      "Seamless execution from concept to completion. Our experienced project managers provide strategic leadership and meticulous coordination to ensure your industrial and commercial projects are delivered efficiently and effectively.",
    icon: "briefcase",
  },
  {
    id: "building-monitoring",
    title: "Building, Monitoring and Evaluation",
    shortDescription:
      "Rigorous oversight to keep projects on track, within budget, and to specification.",
    description:
      "Delivering success through meticulous oversight. We provide comprehensive building services, coupled with rigorous monitoring and evaluation processes, to ensure projects stay on track, within budget, and meet your exact specifications.",
    icon: "chart",
  },
];

export const FEATURED_SERVICES = SERVICES.filter((service) => service.featured);

export const FOOTER_SERVICE_LINKS = [
  { label: "Quality Management", href: "/services#quality-management" },
  { label: "Steel Structure Design", href: "/services#steel-structure" },
  { label: "Mining & Mineral Activities", href: "/services#mining-mineral-activities" },
  { label: "Project Management", href: "/services#project-management" },
];
