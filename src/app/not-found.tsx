import Link from "next/link";
import { Home, Mail, Construction } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
      
      <div className="container relative z-10 max-w-2xl text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
          <Construction className="w-12 h-12 text-[#3B82F6] animate-pulse" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter">
          4<span className="text-[#3B82F6] italic">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">
          Structural Error: Page Not Found
        </h2>
        
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md mx-auto">
          The architectural path you followed seems to be missing from our blueprints. We're currently surveying this route.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="primary" asChild className="group">
            <Link href="/">
              <Home className="mr-2 w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Return to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/5 backdrop-blur-sm" asChild>
            <Link href="/contact">
              <Mail className="mr-2 w-5 h-5" />
              Contact Engineering
            </Link>
          </Button>
        </div>

        <div className="mt-16 text-xs font-mono text-gray-500 uppercase tracking-widest">
          Error_Code: 0x404_NULL_POINTER_TO_RESOURCE
        </div>
      </div>
    </div>
  );
}
