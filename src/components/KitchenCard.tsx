import React from "react";
import Image from "next/image";

interface KitchenCardProps {
    src: string;
    name: string;
    description: string;
}

export default function KitchenCard({ src, name, description }: KitchenCardProps) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image 
                src={src} 
                alt={name} 
                width={600} 
                height={400} 
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-2xl font-bold text-white">{name}</h4>
                <p className="mt-2 text-lg text-gray-300 px-4 text-center">{description}</p>
            </div>
        </div>
    );
} 