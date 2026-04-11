import { PageHero } from "@/components/PageHero";
import { CONTACT_EMAIL, OFFICE_ADDRESS } from "@/lib/constants";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: "LowPond Nigeria Limited ('we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our engineering services."
    },
    {
      title: "2. Information We Collect",
      content: "We may collect personal information that you voluntarily provide to us when you fill out contact forms on our website. This information may include your name, email address, phone number, and details about your engineering or construction projects."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect to communicate with you about your inquiries, provide the requested engineering services, send you administrative information, and improve our website's functionality and user experience."
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please remember that no method of transmission over the internet is 100% secure."
    },
    {
      title: "5. Third-Party Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services or as required by the law of the Federal Republic of Nigeria."
    },
    {
      title: "6. Your Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal data we hold about you."
    },
    {
      title: "7. Contact Us",
      content: `If you have any questions or concerns about this Privacy Policy, please contact us at ${CONTACT_EMAIL} or visit our office at ${OFFICE_ADDRESS}.`
    }
  ];

  return (
    <>
      <PageHero 
        heading="Privacy Policy"
        subtext="How we protect and manage your personal information at LowPond Nigeria Limited."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-sm font-medium text-gray-400 mb-12 uppercase tracking-widest">Last Updated: April 10, 2026</p>
            
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A]">{section.title}</h2>
                  <p className="text-[#64748B] leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
