import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-gray-300 pt-16 pb-8 border-t border-[#1B2A4A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/cropped-LowPond-Main-Logo2.webp" 
                  alt="LowPond Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                LowPond
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Precision-Engineered Solutions for Nigeria's Infrastructure Future. We deliver structurally sound, technically advanced engineering solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-sm">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#structural" className="hover:text-white transition-colors text-sm">Structural Engineering</Link>
              </li>
              <li>
                <Link href="/services#infrastructure" className="hover:text-white transition-colors text-sm">Infrastructure Design</Link>
              </li>
              {/* <li>
                <Link href="/services#mep" className="hover:text-white transition-colors text-sm">MEP Systems</Link>
              </li> */}
              <li>
                <Link href="/services#project-management" className="hover:text-white transition-colors text-sm">Project Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <span className="text-sm">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-sm hover:text-white transition-colors">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1B2A4A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} LowPond Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
