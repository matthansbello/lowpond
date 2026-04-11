import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AboutSlider } from "@/components/AboutSlider";
import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      <PageHero 
        heading="Contact Us"
        subtext="Ready to discuss your next infrastructure project? Get in touch with our engineering team today."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information Sidebar */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Corporate Office</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Address</div>
                      <div className="text-[#64748B] leading-relaxed">
                        {OFFICE_ADDRESS}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Phone</div>
                      <a href={`tel:${CONTACT_PHONE}`} className="text-[#64748B] hover:text-[#3B82F6] transition-colors">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Email</div>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#64748B] hover:text-[#3B82F6] transition-colors">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Business Hours</div>
                      <div className="text-[#64748B]">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 aspect-video bg-gray-100 flex items-center justify-center relative">
                <AboutSlider />
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </>
  );
}
