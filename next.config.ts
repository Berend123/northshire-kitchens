import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Enables static site export
    distDir: "out", // The folder where static files will be placed
    images: {
        unoptimized: true, // Fixes issues with Next.js image optimization
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
