import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // Fixes issues with Next.js image optimization
    },
    ...(isVercel
        ? {}
        : {
              output: "export", // Static site export (writes to out/)
          }),
};

export default nextConfig;
