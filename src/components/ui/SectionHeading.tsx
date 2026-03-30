import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-[#3B82F6] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-2 text-lg text-[#64748B] max-w-2xl">
          {subtext}
        </p>
      )}
    </div>
  );
}
