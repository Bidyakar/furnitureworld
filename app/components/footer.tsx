import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#244d4d] text-gray-200 relative">
      
      {/* Topographic Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/topography.png')" }}
      />
      
      <div className="max-w-[1320px] mx-auto px-6 py-24 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 text-center sm:text-left">
        
        {/* Column 1: Logo + About */}
        <div className="md:border-r border-white/20 pr-8 lg:pr-12">
          <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10h18v6H3z"/>
              <path d="M3 16v4"/>
              <path d="M21 16v4"/>
              <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
            </svg> 
            Furniture World
          </h2>

          <p className="mt-8 text-sm text-gray-300 leading-relaxed font-medium">
            Furniture World is a stellar system way to elevate the important pieces of content
            where it&apos;s usually placed.
          </p>

          <div className="mt-8">
            <h4 className="font-serif font-bold text-white text-lg tracking-wide">Office Hour</h4>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Saturday - Friday <br />
              9am to 8.30pm
            </p>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="md:pl-4">
          <h3 className="text-2xl font-serif font-bold text-white mb-8">Company</h3>
          <ul className="space-y-4 text-sm text-gray-300 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Latest Projects</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog Post</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact us</Link></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-8">Information</h3>
          <ul className="space-y-4 text-sm text-gray-300 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Login</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Register</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Style Guide</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Change Log</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">License</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-8">Contact info</h3>
          
          <div className="space-y-6 text-sm text-gray-300 font-medium">
            <p className="leading-relaxed">
              T: +12345 658 987 <br />
              (038) 12345 678 901
            </p>
            
            <p className="leading-relaxed">
              A: 75 North Street City <br />
              New York, NY 1010, USA
            </p>
            
            <p className="leading-relaxed">
              E: info@example.com <br />
              admin@example.com
            </p>
            
            <p className="pt-4 text-gray-400">
              Powered by Webflow
            </p>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="bg-white text-center text-sm text-gray-500 py-6 relative z-10 font-medium">
        © 2026 <span className="text-gray-800 font-bold">Furniture World</span>. All rights reserved
      </div>

    </footer>
  );
}