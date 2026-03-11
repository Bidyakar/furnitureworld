import Link from "next/link";

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto w-full">

            {/* Top Bar */}
            <div className="bg-[#2f5d57] text-white text-sm px-8 py-2 flex justify-between">
                <span>Call us: +012345 678 910</span>

                <div className="space-x-2">
                    <Link href="/login" className="hover:underline">Login</Link>
                    <span>/</span>
                    <Link href="/register" className="hover:underline">Register</Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#2f5d57] text-white px-8 py-4 flex items-center justify-between border-t border-gray-400">

                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-semibold">
                    <span className="text-yellow-400">🏠</span>
                    <span>Decoral</span>
                </div>

                {/* Menu */}
                <ul className="flex gap-10 text-lg">
                    <li>
                        <Link href="/" className="hover:text-yellow-400">
                            Home ▾
                        </Link>
                    </li>

                    <li>
                        <Link href="/project" className="hover:text-yellow-400">
                            Project
                        </Link>
                    </li>

                    <li>
                        <Link href="/services" className="hover:text-yellow-400">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link href="/pages" className="hover:text-yellow-400">
                            Pages ▾
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-yellow-400">
                            Contact
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}