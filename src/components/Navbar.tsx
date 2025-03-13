"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // ✅ Icons for mobile menu
import Image from "next/image"; // ✅ Import Next.js Image component

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-4 text-white transition-all duration-300 z-10">
            <div className="flex justify-between items-start"> {/* ⬅ Align items to the top */}
                {/* ✅ LOGO (Adjust height so it doesn't push nav down) */}
                <Link href="/" className="flex items-start">
                    <Image
                        src="/images/logo.svg"  // <-- Update with your actual file path
                        alt="Northshire Kitchens Logo"
                        width={280}
                        height={80}
                        priority
                        className="object-contain mt-1" // ⬅ Ensures no extra space
                    />
                </Link>

                {/* ✅ Desktop Navigation - Adjust alignment */}
                <ul className="hidden md:flex gap-8 text-lg items-start"> {/* ⬅ Align items to the top */}
                    <li className="hover:text-orange-500 transition">
                        <Link to="home-details" smooth={true} duration={600}>Home</Link>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <Link to="about" smooth={true} duration={600}>About</Link>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <Link to="collections" smooth={true} duration={600}>Kitchens</Link>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <Link to="considerations" smooth={true} duration={600}>Considerations</Link>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <Link to="contact" smooth={true} duration={600}>Contact</Link>
                    </li>
                </ul>

                {/* ✅ Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mt-2">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ✅ Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-white text-gray-900 shadow-md rounded-lg p-4 absolute left-0 w-full">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li className="hover:text-orange-500 transition">
                            <Link to="hero" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <Link to="about" smooth={true} duration={600} onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <Link to="collections" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Kitchens</Link>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <Link to="considerations" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Considerations</Link>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <Link to="contact" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
