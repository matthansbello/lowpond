"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-12 text-center space-y-6 animate-in fade-in zoom-in duration-500 shadow-sm border border-blue-50">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Message Sent!</h3>
          <p className="text-[#64748B]">
            Thank you for reaching out. Our engineering team will review your project details and get back to you shortly.
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setStatus("idle")}
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F1F5F9] rounded-2xl p-8 md:p-12 border border-blue-100/50 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-bl-full -mr-32 -mt-32 pointer-events-none" />
      <h3 className="text-2xl font-bold text-[#0F172A] mb-8 relative z-10">Send a Message</h3>
      
      <form action={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-[#0F172A]">First Name</label>
            <input 
              required 
              name="firstName" 
              type="text" 
              id="firstName" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-[#0F172A]" 
              placeholder="John" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-[#0F172A]">Last Name</label>
            <input 
              required 
              name="lastName" 
              type="text" 
              id="lastName" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-[#0F172A]" 
              placeholder="Doe" 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#0F172A]">Email Address</label>
          <input 
            required 
            name="email" 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-[#0F172A]" 
            placeholder="john@company.com" 
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-[#0F172A]">Subject / Inquiry Type</label>
          <select 
            required 
            name="subject" 
            id="subject" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all bg-white text-[#0F172A]"
          >
            <option value="Request a Consultation">Request a Consultation</option>
            <option value="Structural Engineering Services">Structural Engineering Services</option>
            <option value="Project Management Inquiry">Project Management Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#0F172A]">Project Details</label>
          <textarea 
            required 
            name="message" 
            id="message" 
            rows={5} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all resize-y text-[#0F172A]" 
            placeholder="Briefly describe your project requirements..."
          ></textarea>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg text-sm border border-red-100">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          variant="primary" 
          className="w-full" 
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </form>
    </div>
  );
}
