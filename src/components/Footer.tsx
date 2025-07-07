"use client";  // ✅ Ensure it runs on the client side

import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Facebook, Mail, Phone, Instagram } from "lucide-react";

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
                    {/* ✅ Document Links */}
                    <div className="mt-4 text-sm space-y-1">
                        <p>
                            <a href="/documents/Privacy Policy.pdf" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:text-orange-500 transition">
                                Privacy Policy
                            </a>
                        </p>
                        <p>
                            <a href="/documents/Modern Slavery and Human Trafficking Policy.pdf" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:text-orange-500 transition">
                                Modern Slavery Policy
                            </a>
                        </p>
                        <p>
                            <a href="/documents/Anti Bribery Policy.pdf" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:text-orange-500 transition">
                                Anti-Bribery Policy
                            </a>
                        </p>
                        <p>
                            <a href="/documents/Accessibility Statement.pdf" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:text-orange-500 transition">
                                Accessibility Statement
                            </a>
                        </p>
                    </div>
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

                    {/* Instagram */}
                    <a href="https://www.instagram.com/northshire_kitchens"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-orange-500 transition">
                        <Instagram size={24} />
                    </a>

                    {/* Email */}
                    <a href="mailto:sales@northshirekitchens.com"
                       className="hover:text-orange-500 transition">
                        <Mail size={24} />
                    </a>

                    {/* Phone */}
                    <a href="tel:+441609500070"
                       className="hover:text-orange-500 transition">
                        <Phone size={24} />
                        <span className="sr-only">+44 1609 500070</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
