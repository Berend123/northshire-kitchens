import React from "react";

export default function HomeDetails() {
    return (
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