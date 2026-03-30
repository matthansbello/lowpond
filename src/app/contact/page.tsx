import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-[#0A1628] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            align="center"
            heading="Contact Us"
            subtext="Ready to discuss your next infrastructure project? Get in touch with our engineering team."
            className="text-white mx-auto"
          />
        </div>
      </section>

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
                        74 Engineering Way<br />
                        Victoria Island, Lagos<br />
                        Nigeria
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Phone</div>
                      <a href="tel:+2348037155720" className="text-[#64748B] hover:text-[#3B82F6] transition-colors">
                        +234 803 715 5720
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] mb-1">Email</div>
                      <a href="mailto:lowpondng@gmail.com" className="text-[#64748B] hover:text-[#3B82F6] transition-colors">
                        lowpondng@gmail.com
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
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 aspect-video bg-gray-100 flex items-center justify-center relative">
                <span className="text-gray-400 font-medium z-10">Interactive Map Placeholder</span>
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F1F5F9] rounded-2xl p-8 md:p-12 border border-blue-100/50 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-bl-full -mr-32 -mt-32 pointer-events-none" />
               <h3 className="text-2xl font-bold text-[#0F172A] mb-8 relative z-10">Send a Message</h3>
               <form className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label htmlFor="firstName" className="text-sm font-semibold text-[#0F172A]">First Name</label>
                     <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="lastName" className="text-sm font-semibold text-[#0F172A]">Last Name</label>
                     <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" placeholder="Doe" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-semibold text-[#0F172A]">Email Address</label>
                   <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" placeholder="john@company.com" />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="subject" className="text-sm font-semibold text-[#0F172A]">Subject / Inquiry Type</label>
                   <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all bg-white">
                     <option>Request a Consultation</option>
                     <option>Structural Engineering Services</option>
                     <option>Project Management Inquiry</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-semibold text-[#0F172A]">Project Details</label>
                   <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all resize-y" placeholder="Briefly describe your project requirements..."></textarea>
                 </div>
                 <Button type="submit" size="lg" variant="primary" className="w-full">
                   Submit Inquiry
                 </Button>
               </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
