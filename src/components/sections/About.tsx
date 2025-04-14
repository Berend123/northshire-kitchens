import React from "react";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Proudly Designed & Manufactured in North Yorkshire</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                At <strong>Northshire Kitchens</strong>, we combine traditional craftsmanship with cutting-edge technology to create beautiful, functional kitchens built to last.
                Every kitchen is manufactured in-house at our advanced production facility, allowing us to deliver superior quality while keeping costs competitive.
            </p>

            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-800">Small-Town Service, Big-Brand Capabilities</h3>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                    Unlike mass-produced kitchens, each of our designs is carefully crafted to suit your space, needs, and style—ensuring a kitchen that is uniquely yours.
                </p>
            </div>

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

            <div className="mt-10">
                <a
                    href="#contact"
                    className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                >
                    Get a Free Consultation
                </a>
            </div>
        </section>
    );
} 