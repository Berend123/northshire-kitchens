"use client";

import Image from "next/image";

const considerations = [
    {
        name: "Colours",
        description: "Immerse yourself in the world of kitchen design excellence by Jigsaw Kitchens. Our carefully curated collection presents kitchens that redefine culinary spaces. Select from a carefully curated palette of 36 paint-to-order colours or choose from over 2,600 bespoke colours.",
        image: "/images/colours.webp",
    },
    {
        name: "Storage",
        description: "So, you've chosen your door range and cabinet colour, what about what sits behind the door? We've got a number of options to make access quicker and easier and ensure you maximise the space in your kitchen.",
        image: "/images/storage.jpg",
    },
    {
        name: "Sinks",
        description: "Your kitchen sink is bound to be used almost every day so make sure you choose carefully. From larger drying areas to practical half bowls and colour choices we know that the sink is another important piece in your kitchen.",
        image: "/images/sinks.jpg",
    },
    {
        name: "Handles",
        description: "Handles are a highly personal choice and can change the kitchen aesthetic dramatically. Jigsaw offers a multitude of handle shapes, sizes and designs to round off your door choice in style.",
        image: "/images/handles.jpg",
    },
    {
        name: "Taps",
        description: "Your kitchen sink is bound to be used almost every day so make sure you choose carefully. From larger drying areas to practical half bowls and colour choices we know that the sink is another important piece in your Jigsaw kitchen.",
        image: "/images/taps.jpg",
    },
];

export default function Considerations() {
    return (
        <section id="considerations" className="py-16 px-6 md:px-12 lg:px-24 text-center bg-white">
            {/* 🔹 Main Heading */}
            <h2 className="text-3xl font-bold text-gray-800">Considerations</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                When designing your kitchen, it's the finer details that truly bring it all together. From clever storage solutions
                that keep everything within easy reach to the perfect tap that complements both form and function, every element plays
                a role in shaping your space. Whether it’s choosing a sink that suits your daily needs, selecting handles that enhance your style,
                or maximizing cabinet space with smart interiors, these final touches ensure your kitchen is as practical as it is beautiful.
            </p>

            {/* 🔹 Grid Layout for Considerations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {considerations.map((item) => (
                    <div key={item.name} className="relative rounded-lg overflow-hidden shadow-lg group">
                        {/* ✅ Image */}
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={600}
                            height={400}
                            className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* ✅ Morphing Hover Effect */}
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                            <h4 className="text-2xl font-bold text-white">{item.name}</h4>
                            <p className="mt-2 text-lg text-gray-300 text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
