"use client";

import { useState } from "react";
import Image from "next/image";

const collections = {
    classic: {
        name: "Classic Collection",
        description: `Today, the timeless appeal of Shaker-style kitchens offers a versatile choice, from traditional country to elegantly modern styles. 
        Discover a symphony of natural materials, curated colours, and intricate details that come together to create a kitchen that effortlessly blends sophistication and charm.`,
        kitchens: [
            { src: "/images/cambridge.jpg", name: "Cambridge", description: "With frames crafted from solid Ash and enhanced with v-groove detailing, the Cambridge range embodies the timeless charm of the classic timber shaker." },
            { src: "/images/newmarket.jpg", name: "Newmarket", description: "Newmarket combines the solid timber construction of Cambridge, with the narrow frame and simple grooveless design of Oxford." },
            { src: "/images/windsor.jpg", name: "Windsor", description: "Windsor captures that quintessential British feel, drawing inspiration from traditional artisan cabinetmakers." },
            { src: "/images/cartmel.jpg", name: "Cartmel", description: "Introducing Cartmel, a shaker design that combines timeless elegance with modern durability." },
            { src: "/images/rydal.jpg", name: "Rydal", description: "Designed with busy households in mind, Rydal combines a hard-wearing timber effect with contemporary narrow frame proportions." },
            { src: "/images/ascot.jpg", name: "Ascot", description: "Ascot, featuring an ultra-slim frame, stands out as our most contemporary shaker kitchen range." },
            { src: "/images/stratto.jpg", name: "Stratto", description: "The classic shaker door design has been infused with a contemporary twist, featuring a smooth matt finish and narrow frame." },
        ],
    },
    contour: {
        name: "Contour Collection",
        description: `The Contour Collection creates the aesthetic of the ultimate traditional kitchen. 
        A mixture of classic materials and finishes blended into an in-frame effect, giving your kitchen a timeless, elegant feel.`,
        kitchens: [
            { src: "/images/chillingham.jpg", name: "Chillingham", description: "The beauty of true timber with contemporary styling and inframe effect, creates an eclectic kitchen that appeals to all generations." },
            { src: "/images/langley.jpg", name: "Langley", description: "Embrace a new concept with Langley and create a contemporary inframe effect kitchen, with super smooth matt finish." },
            { src: "/images/stirling.jpg", name: "Stirling", description: "Stirling is our most traditional inframe effect range, constructed from timber and with additional beading on the shaker detail." },
            { src: "/images/durham.jpg", name: "Durham", description: "Durham offers a modern slant on inframe effect kitchens, with a tactile smooth matt finish and subtle detailing for a kitchen that oozes sophistication." },
        ],
    },
    contemporary: {
        name: "Contemporary Collection",
        description: `Our contemporary collection is where sleek design meets functionality. 
        Minimalist and modern, these kitchens provide clean lines, bold contrasts, and innovative materials that define contemporary living.`,
        kitchens: [
            { src: "/images/lucente-gloss.jpg", name: "Lucente Gloss", description: "This popular 'J' pull handleless range offers contemporary minimalism with a light-reflecting lacquered gloss finish." },
            { src: "/images/lucente-matt.jpg", name: "Lucente Matt", description: "The same 'J' pull handleless range but in a subtle matt finish, offering refined elegance." },
            { src: "/images/grantham.jpg", name: "Grantham", description: "A statement-making style, combining the beloved shaker design with a contemporary recessed handle." },
            { src: "/images/vivo-gloss.jpg", name: "Vivo+ Gloss", description: "Simple and understated, Vivo+ epitomises the contemporary, minimal feel with its ultra-modern gloss finish." },
            { src: "/images/vivo-matt.jpg", name: "Vivo+ Matt", description: "Embrace the beautiful simplicity of a slab door with a painted super matt finish for a sense of understated luxury." },
            { src: "/images/linear.jpg", name: "Linear", description: "Elevate your space with textured door finishes that can be mixed with other styles or used as a statement piece." },
        ],
    },
    handleless: {
        name: "True Handleless Collection",
        description: `Introducing seamless elegance with our handleless profile system, meticulously crafted to offer an uninterrupted and streamlined feel. Each kitchen showcases the perfect blend of form and function, with clean lines and innovative storage solutions.`,
        kitchens: [
            { src: "/images/vivo-gloss.jpg", name: "Driftwood & White", description: "A sophisticated combination of driftwood-effect tall units and pristine white base units, creating a harmonious blend of warmth and modernity." },
            { src: "/images/vivo-matt.jpg", name: "Urban White", description: "Sleek white handleless units complemented by rich wooden wall paneling, offering a striking contrast against the contemporary dark floor." },
            { src: "/images/stratto.jpg", name: "Natural Oak", description: "Warm natural oak units paired with a dramatic black terrazzo-style worktop, bringing an organic yet contemporary feel to the space." },
            { src: "/images/linear.jpg", name: "Azure Blue", description: "A bold statement in azure blue, featuring our signature handleless profile system that creates clean, uninterrupted lines." },
            { src: "/images/handleless-5.jpg", name: "Navy & White", description: "An elegant contrast of deep navy island units with crisp white wall cabinets, enhanced by industrial-style pendant lighting." },
            { src: "/images/handleless-6.jpg", name: "Cashmere Elegance", description: "Sophisticated cashmere units with integrated appliances, demonstrating the seamless integration of form and function." },
            { src: "/images/handleless-7.jpg", name: "White & Bronze", description: "Contemporary white handleless kitchen elevated with warm bronze trim details, creating a luxurious and refined aesthetic." },
            { src: "/images/handleless-8.jpg", name: "White & Graphite", description: "A modern two-tone design combining light upper units with bold graphite base cabinets, featuring geometric tile details." },
        ],
    },
};

export default function KitchenCollections() {
    const [activeTab, setActiveTab] = useState<keyof typeof collections>("classic");

    return (
        <section id="collections" className="py-16 px-6 md:px-12 lg:px-24 text-center bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800">Explore Our Kitchen Collections</h2>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover our four distinct kitchen collections, each designed to suit different styles and preferences. 
                From timeless elegance to modern minimalism, our Classic, Contour, Contemporary, and True Handleless ranges offer a variety of options to create your perfect kitchen.
            </p>

            {/* 🔹 Tabs Navigation */}
            <div className="flex flex-col md:flex-row justify-center gap-2 md:space-x-4 mt-8">
                {Object.keys(collections).map((key) => (
                    <button
                        key={key}
                        className={`px-6 py-2 text-lg font-semibold rounded-lg transition w-full md:w-auto ${
                            activeTab === key
                                ? "bg-orange-500 text-white shadow-md"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => setActiveTab(key as keyof typeof collections)}
                    >
                        {collections[key as keyof typeof collections].name}
                    </button>
                ))}
            </div>

            {/* 🔹 Collection Content */}
            <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800">{collections[activeTab].name}</h3>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{collections[activeTab].description}</p>

                {/* 🔹 Kitchen Grid with Morphing Effect */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {collections[activeTab].kitchens.map((kitchen) => (
                        <div key={kitchen.name} className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image src={kitchen.src} alt={kitchen.name} width={600} height={400} className="rounded-lg transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h4 className="text-2xl font-bold text-white">{kitchen.name}</h4>
                                <p className="mt-2 text-lg text-gray-300 px-4 text-center">{kitchen.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
