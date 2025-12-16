import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Static site export (writes to out/)
    images: {
        unoptimized: true, // Fixes issues with Next.js image optimization
    },
};

export default nextConfig;
