// src/app/page.tsx
"use client";

import React from "react";
import { Navbar } from "@/components/Navbar"; // Assuming Navbar is in components
import Image from "next/image";
import KitchenCollections from "@/components/KitchenCollections";
import Considerations from "@/components/Considerations";
import { Footer } from "@/components/Footer";

export default function Home() {
    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormState({ name: '', email: '', phone: '', message: '' });

            // Reset form status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            // Reset error status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <>
            <main>
                {/* ✅ Navbar - Fixed at top */}
                <Navbar />
                
                {/* ✅ Hero Section - Cambridge */}
                <section
                    id="hero"
                    className="relative h-screen text-center text-white"
                >
                    {/* ✅ Optimized Background Image */}
                    <Image
                        src="/images/cambridge.jpg"
                        alt="Luxury Cambridge Kitchen Design"
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        priority
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 w-full">
                        <div className="max-w-3xl mx-auto px-6">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                                Crafting Dream Kitchens with Precision & Elegance
                            </h1>
                            <p className="mt-4 text-lg md:text-xl opacity-90">
                                Expertly designed, high-quality kitchens tailored for your home.
                            </p>
                            <a
                                href="#collections"
                                aria-label="Explore Our Kitchen Features"
                                className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                            >
                                Explore Our Work
                            </a>
                        </div>
                    </div>
                </section>

                {/* ✅ Expanded Home Section */}
                <section id="home-details" className="py-16 px-6 md:px-12 lg:px-24 text-center bg-white">
                    <h2 className="text-3xl font-bold text-gray-800">Expertly Crafted Kitchens – Made Just for You</h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        At <strong>Northshire Kitchens</strong>, we design and manufacture high-quality kitchens that blend style, function, and durability.
                        Every kitchen we create is crafted in-house using our state-of-the-art production machinery, ensuring precision, consistency, and exceptional quality.
                    </p>

                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        Discover our four distinct kitchen collections, each designed to suit different styles and preferences. 
                        From timeless elegance to modern minimalism, our Classic, Contour, Contemporary, and True Handleless ranges offer a variety of options to create your perfect kitchen.
                    </p>

                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        From timeless shaker designs to sleek, modern handleless kitchens, we offer an extensive range of styles, colours, and finishes.
                        Whether you're renovating your home, designing a new build, or upgrading a commercial space, we provide small-town service with big-brand capabilities—personalized attention with the power and efficiency of large-scale manufacturing.
                    </p>

                    {/* ✅ Why Choose Us Section */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800">🏭 Made in Our Facility</h3>
                            <p className="text-gray-600 mt-2">
                                Every kitchen is built using our advanced in-house machinery for precision and reliability.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800">🎨 Bespoke Designs</h3>
                            <p className="text-gray-600 mt-2">
                                Customize your kitchen with endless options, from classic to contemporary.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800">📦 Smart Storage</h3>
                            <p className="text-gray-600 mt-2">
                                Innovative designs to maximize space and organization.
                            </p>
                        </div>

                        {/* Commented out until flexible finance is available
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800">💰 Flexible Finance</h3>
                            <p className="text-gray-600 mt-2">
                                Making your dream kitchen accessible with tailored payment plans.
                            </p>
                        </div>
                        */}
                    </div>

                    {/* ✅ CTA */}
                    <div className="mt-10">
                        <a
                            href="#contact"
                            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </section>

                {/* ✅ About Section */}
                <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Proudly Designed & Manufactured in North Yorkshire</h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        At <strong>Northshire Kitchens</strong>, we combine traditional craftsmanship with cutting-edge technology to create beautiful, functional kitchens built to last.
                        Every kitchen is manufactured in-house at our advanced production facility, allowing us to deliver superior quality while keeping costs competitive.
                    </p>

                    {/* ✅ Small-Town Service, Big-Brand Capabilities */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-gray-800">Small-Town Service, Big-Brand Capabilities</h3>
                        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                            Unlike mass-produced kitchens, each of our designs is carefully crafted to suit your space, needs, and style—ensuring a kitchen that is uniquely yours.
                        </p>
                    </div>

                    {/* ✅ Our Process */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-gray-800">Our Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold text-gray-800">📐 Consultation & Design</h4>
                                <p className="text-gray-600 mt-2">
                                    We listen to your needs and create a tailored design.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold text-gray-800">⚙️ Precision Manufacturing</h4>
                                <p className="text-gray-600 mt-2">
                                    Every component is crafted using our cutting-edge machinery for flawless quality.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold text-gray-800">🛠️ Seamless Installation</h4>
                                <p className="text-gray-600 mt-2">
                                    Our expert team ensures a smooth and professional fit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Why Northshire Kitchens? */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-gray-800">Why Northshire Kitchens?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <h4 className="text-xl font-semibold text-gray-800">🏭 Made in Our Own Facility</h4>
                                <p className="text-gray-600 mt-2">
                                    Complete control over quality, lead times, and customization.
                                </p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <h4 className="text-xl font-semibold text-gray-800">🎨 High-Quality Craftsmanship</h4>
                                <p className="text-gray-600 mt-2">
                                    Attention to detail in every design.
                                </p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <h4 className="text-xl font-semibold text-gray-800">🌱 Sustainable Practices</h4>
                                <p className="text-gray-600 mt-2">
                                    Responsibly sourced materials and efficient production methods.
                                </p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <h4 className="text-xl font-semibold text-gray-800">🤝 Customer-First Approach</h4>
                                <p className="text-gray-600 mt-2">
                                    Your vision, our expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ✅ CTA Button */}
                    <div className="mt-10">
                        <a
                            href="#contact"
                            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </section>

                <KitchenCollections />

                <Considerations />

                {/* ✅ Contact Section */}
                <section id="contact" className="relative py-16 px-6 md:px-12 lg:px-24 text-center text-white">
                    {/* ✅ Background Image */}
                    <Image
                        src="/images/rydal.jpg"
                        alt="Rydal Kitchen Background"
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        priority
                        className="absolute inset-0"
                    />
                    {/* ✅ Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold">Let's Create Your Dream Kitchen</h2>
                        <p className="mt-2 text-lg max-w-3xl mx-auto">
                            We'd love to help you bring your kitchen vision to life. Whether you're after a full renovation, a brand-new design, or simply need advice,
                            our team is here to guide you every step of the way.
                        </p>

                        {/* ✅ Contact Details */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Address & Opening Hours */}
                            <div className="bg-white bg-opacity-90 text-gray-900 shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold">📍 Production Facility</h3>
                                <p className="mt-2">
                                    Unit 2, Binks Close, Standard Way Industrial Park,<br />
                                    Northallerton, North Yorkshire, DL6 2YB
                                </p>

                                <h3 className="text-xl font-semibold mt-6">🕒 Opening Hours</h3>
                                <p>
                                    Monday – Friday: 9:00 AM – 5:00 PM <br />
                                    Saturday: 10:00 AM – 2:00 PM <br />
                                    Sunday: Closed
                                </p>
                            </div>

                            {/* Contact Info & Socials */}
                            <div className="bg-white bg-opacity-90 text-gray-900 shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold">📞 Get in Touch</h3>
                                <p className="mt-2">
                                    <strong>Call Us:</strong>
                                    <a href="tel:+447561317660" className="text-orange-500 hover:underline"> +44 7561 317660</a> <br />
                                    <strong>Email:</strong>
                                    <a href="mailto:sales@northshirekitchens.com" className="text-orange-500 hover:underline"> sales@northshirekitchens.com</a>
                                </p>

                                <h3 className="text-xl font-semibold mt-6">🔹 Follow Us</h3>
                                <p>
                                    📸 Facebook:
                                    <a href="https://www.facebook.com/profile.php?id=61573564756417" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                                        Northshire Kitchens
                                    </a>
                                </p>
                                <p>
                                    📱 Instagram:
                                    <a href="https://www.instagram.com/northshire_kitchens" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                                        @northshire_kitchens
                                    </a>
                                </p>
                            </div>
                        </div>


                        {/* ✅ Contact Form */}
                        <div className="mt-10 bg-white bg-opacity-95 text-gray-900 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                            <h3 className="text-2xl font-bold">💬 Request a Free Consultation</h3>
                            <p className="mt-2">
                                Fill out our contact form, and we'll get back to you within 24 hours.
                            </p>
                            <form className="mt-6" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    disabled={status === 'loading'}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                    disabled={status === 'loading'}
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Optional)"
                                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                                    value={formState.phone}
                                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                    disabled={status === 'loading'}
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32 focus:ring-2 focus:ring-orange-500"
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                    disabled={status === 'loading'}
                                ></textarea>
                                
                                {status === 'success' && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                                
                                {status === 'error' && (
                                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                        Failed to send message. Please try again later.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`w-full py-3 ${
                                        status === 'loading' 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-orange-500 hover:bg-orange-600'
                                    } text-white rounded-lg transition`}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />

            </main>
        </>
    );
}
