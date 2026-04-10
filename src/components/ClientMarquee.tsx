import React from 'react';
import Image from 'next/image';

const clients = [
  { name: "Emzor", logo: "/images/Emzor.png" },
  // { name: "AfriBuild", logo: "/images/afribuild.png" },
  // { name: "StateWorks", logo: "/images/stateworks.png" },
  { name: "NIPSS", logo: "/images/Nipss-LOGO-300x300-1.png" },
  { name: "SON", logo: "/images/SON-logo-1-300x300-1.png" },
  { name: "UniJos", logo: "/images/Unijos-logo-300x300-1.png" },
];

export const ClientMarquee = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px w-12 bg-blue-500" />
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Our Industry Partners</span>
        </div>
        <h2 className="text-3xl font-bold text-[#0F172A]">Trusted by Leading Organizations</h2>
      </div>

      <div className="relative flex overflow-x-hidden border-y border-gray-100 bg-gray-50/30 py-12">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap items-center">
          {/* Duplicated set for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="mx-12 flex items-center gap-8 group"
            >
              <div className="relative h-16 w-40 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Separator dots */}
              <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
