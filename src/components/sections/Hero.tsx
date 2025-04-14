import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen text-center text-white"
        >
            <Image
                src="/images/cambridge.jpg"
                alt="Luxury Cambridge Kitchen Design"
                fill
                style={{ objectFit: 'cover' }}
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
    );
} 