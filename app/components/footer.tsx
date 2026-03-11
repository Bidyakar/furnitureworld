import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2f5d57] text-gray-200 pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">🏠</span> Decoral
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Decoral is a dollar system way the important pieces of content
            actual it’s usually placed.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold">Office Hour</h4>
            <p className="text-gray-300 mt-2">
              Saturday - Friday <br />
              9am to 8.30pm
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Company</h3>

          <ul className="space-y-3">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Latest Projects</Link></li>
            <li><Link href="#">Blog Post</Link></li>
            <li><Link href="#">Our Team</Link></li>
            <li><Link href="#">Contact us</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Information</h3>

          <ul className="space-y-3">
            <li><Link href="#">Login</Link></li>
            <li><Link href="#">Register</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Style Guide</Link></li>
            <li><Link href="#">Change Log</Link></li>
            <li><Link href="#">License</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact info</h3>

          <p className="mb-4">
            T: +12345 658 987 <br />
            (038) 12345 678 901
          </p>

          <p className="mb-4">
            A: 75 North Street City <br />
            New York, NY 1010, USA
          </p>

          <p className="mb-4">
            E: info@example.com <br />
            admin@example.com
          </p>

          <p className="text-gray-300">
            Powered by Webflow
          </p>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-200 text-center text-gray-700 mt-16 py-4">
        © 2022 <span className="font-semibold">Brandbes</span>. All rights reserved
      </div>

    </footer>
  );
}