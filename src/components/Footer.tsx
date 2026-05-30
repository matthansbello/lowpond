import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from "@/lib/constants";
import { FOOTER_SERVICE_LINKS } from "@/lib/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-gray-300 pt-16 pb-8 border-t border-primary-slate">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/cropped-LowPond-Main-Logo2.webp"
                  alt="Lowpond Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Lowpond</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Precision-Engineered Solutions for Nigeria&apos;s Infrastructure Future. We deliver structurally sound, technically advanced engineering solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors text-sm">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Services</h3>
            <ul className="space-y-4">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                <span className="text-sm">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-blue shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-sm hover:text-white transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-blue shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-slate flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Lowpond Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
