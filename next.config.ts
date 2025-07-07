import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "out", // Custom build directory; keeping this but removing static export so API routes work
    images: {
        unoptimized: true, // Fixes issues with Next.js image optimization
    },
};

export default nextConfig;
