"use client";

import React, { useState } from "react";
import { collections } from "@/data/collections";
import KitchenCard from "./KitchenCard";

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
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    {collections[activeTab].description}
                </p>

                {/* 🔹 Kitchen Grid with Morphing Effect */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {collections[activeTab].kitchens.map((kitchen) => (
                        <KitchenCard
                            key={kitchen.name}
                            src={kitchen.src}
                            name={kitchen.name}
                            description={kitchen.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
