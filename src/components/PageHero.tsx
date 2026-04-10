import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({
  heading,
  subtext,
  align = "center",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative pt-48 pb-32 overflow-hidden bg-[#0A1628]", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/engineering-hero-bg.png"
          alt={heading}
          fill
          className="object-cover opacity-40 brightness-[0.7] contrast-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/80 to-[#0A1628]" />
      </div>

      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div
          className={cn("flex flex-col gap-6 max-w-4xl", {
            "items-start text-left": align === "left",
            "items-center text-center mx-auto": align === "center",
          })}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {heading}
            </h1>
            <div className="h-1.5 w-24 bg-blue-500 rounded-full animate-in fade-in zoom-in duration-1000 delay-300" />
          </div>
          
          {subtext && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
