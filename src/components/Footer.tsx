"use client";  // ✅ Ensure it runs on the client side

import { Link } from "react-scroll";
import Image from "next/image";
import { Facebook, Mail, Phone } from "lucide-react";

export function Footer() {  // ✅ Ensure it's a named export
    return (
        <footer className="bg-gray-900 text-white py-10 mt-16">
            <div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-24">

                {/* ✅ Brand & Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-wide">Northshire Kitchens</h2>
                    <p className="text-sm mt-2">
                        &copy; {new Date().getFullYear()} Northshire Kitchens. All Rights Reserved.
                    </p>
                </div>

                {/* ✅ Navigation Links */}
                <ul className="flex gap-6 mt-4 md:mt-0 text-sm">
                    <li className="hover:text-orange-500 transition">
                        <Link to="hero" smooth={true} duration={600}>Home</Link>
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

                {/* ✅ Social Media Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">

                    {/* Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61573564756417"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-orange-500 transition">
                        <Facebook size={24} />
                    </a>

                    {/* Email */}
                    <a href="mailto:northshiredevelopments@gmail.com"
                       className="hover:text-orange-500 transition">
                        <Mail size={24} />
                    </a>

                    {/* Phone */}
                    <a href="tel:+447561317660"
                       className="hover:text-orange-500 transition">
                        <Phone size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
