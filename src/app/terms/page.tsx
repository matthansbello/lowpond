import { PageHero } from "@/components/PageHero";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the LowPond Nigeria Limited website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in Nigeria. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "The content on this website, including but not limited to text, graphics, logos, images, and technical specifications, is the property of LowPond Nigeria Limited and is protected by copyright and intellectual property laws. Unauthorized use of these materials is strictly prohibited."
    },
    {
      title: "3. Use License",
      content: "Permission is granted to temporarily view the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not modify the materials or use them for any commercial purpose."
    },
    {
      title: "4. Disclaimer",
      content: "The materials on LowPond Nigeria Limited's website are provided on an 'as is' basis. While we strive for accuracy, we make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular engineering purpose."
    },
    {
      title: "5. Limitations of Liability",
      content: "In no event shall LowPond Nigeria Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website."
    },
    {
      title: "6. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
    },
    {
      title: "7. Modifications",
      content: "LowPond Nigeria Limited may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms and conditions."
    }
  ];

  return (
    <>
      <PageHero 
        heading="Terms of Service"
        subtext="Operating conditions and legal agreements for using LowPond infrastructure resources."
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
