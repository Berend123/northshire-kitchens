// src/app/page.tsx
"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HomeDetails from "@/components/sections/HomeDetails";
import About from "@/components/sections/About";
import { Footer } from "@/components/Footer";

// Dynamically import components that are not immediately visible
const KitchenCollections = dynamic(() => import("@/components/KitchenCollections"), {
    loading: () => <div className="h-96 flex items-center justify-center">Loading collections...</div>
});

const Considerations = dynamic(() => import("@/components/Considerations"), {
    loading: () => <div className="h-96 flex items-center justify-center">Loading considerations...</div>
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
    loading: () => <div className="h-96 flex items-center justify-center">Loading contact form...</div>
});

export default function Home() {
    return (
        <>
            <main>
                <Navbar />
                <Hero />
                <HomeDetails />
                <About />
                
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading collections...</div>}>
                    <KitchenCollections />
                </Suspense>
                
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading considerations...</div>}>
                    <Considerations />
                </Suspense>
                
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading contact form...</div>}>
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
