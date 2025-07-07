"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // ✅ Import react-scroll for smooth scrolling
import { Menu, X } from "lucide-react";
import Link from "next/link"; // ✅ Use Next.js Link for page navigation
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-4 text-white transition-all duration-300 z-10">
            <div className="flex justify-between items-start relative">
                {/* ✅ LOGO (Left) */}
                <Link href="/" className="flex items-start">
                    <Image
                        src="/images/logo.svg"
                        alt="Northshire Kitchens Logo"
                        width={280}
                        height={80}
                        priority
                        className="object-contain mt-1 h-auto"
                    />
                </Link>

                {/* ✅ Company Name (Center) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block mt-10">
                    <h1 className="text-2xl font-bold tracking-wider">NORTHSHIRE KITCHENS</h1>
                </div>

                {/* ✅ Desktop Navigation (Right) */}
                <ul className="hidden md:flex gap-8 text-lg items-start">
                    <li className="hover:text-orange-500 transition">
                        <ScrollLink to="home-details" smooth={true} duration={600}>Home</ScrollLink>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <ScrollLink to="about" smooth={true} duration={600}>About</ScrollLink>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <ScrollLink to="collections" smooth={true} duration={600}>Kitchens</ScrollLink>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <ScrollLink to="considerations" smooth={true} duration={600}>Considerations</ScrollLink>
                    </li>
                    <li className="hover:text-orange-500 transition">
                        <ScrollLink to="contact" smooth={true} duration={600}>Contact</ScrollLink>
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
                            <ScrollLink to="home-details" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Home</ScrollLink>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <ScrollLink to="about" smooth={true} duration={600} onClick={() => setIsOpen(false)}>About</ScrollLink>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <ScrollLink to="collections" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Kitchens</ScrollLink>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <ScrollLink to="considerations" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Considerations</ScrollLink>
                        </li>
                        <li className="hover:text-orange-500 transition">
                            <ScrollLink to="contact" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Contact</ScrollLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
