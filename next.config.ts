import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Using default .next directory for Vercel compatibility
    images: {
        unoptimized: true, // Fixes issues with Next.js image optimization
    },
};

export default nextConfig;
