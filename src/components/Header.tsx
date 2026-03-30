"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "Featured Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#0A1628] rounded flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
              <span className="text-white font-bold text-xl leading-none">L</span>
            </div>
            <span className={cn("text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-[#0F172A]" : "text-white")}>
              LowPond
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#3B82F6]",
                    isActive
                      ? "text-[#3B82F6]"
                      : isScrolled
                      ? "text-[#64748B]"
                      : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-medium transition-all hover:scale-105",
                isScrolled
                  ? "bg-[#0A1628] text-white hover:bg-[#3B82F6]"
                  : "bg-white text-[#0A1628] hover:bg-gray-100"
              )}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2", isScrolled ? "text-[#0F172A]" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block text-base font-medium transition-colors",
                  isActive ? "text-[#3B82F6]" : "text-[#0F172A]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="block w-full text-center bg-[#0A1628] text-white py-3 rounded-md font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
