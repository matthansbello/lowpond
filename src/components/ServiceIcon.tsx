import type { ComponentType } from "react";
import {
  ShieldCheck,
  Building2,
  Globe,
  PenTool,
  Hammer,
  Briefcase,
  LineChart,
  Pickaxe,
} from "lucide-react";
import { ServiceIconName } from "@/lib/services";

const ICONS: Record<ServiceIconName, ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  building: Building2,
  globe: Globe,
  pen: PenTool,
  hammer: Hammer,
  briefcase: Briefcase,
  chart: LineChart,
  pickaxe: Pickaxe,
};

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
