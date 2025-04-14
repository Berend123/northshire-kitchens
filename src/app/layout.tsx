import React from 'react';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://northshirekitchens.com'),
    title: "Northshire Kitchens",
    description: "Expertly crafted kitchens with precision and durability.",
    icons: {
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico",
        apple: "/images/apple-touch-icon.png",
    },
    openGraph: {
        title: "Northshire Kitchens",
        description: "Expertly crafted kitchens with precision and durability.",
        url: "https://northshirekitchens.com",
        siteName: "Northshire Kitchens",
        images: [
            {
                url: "/images/Classic-Cambridge.jpg",
                width: 1200,
                height: 630,
                alt: "Northshire Kitchens - Expertly Crafted Kitchen Designs",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="manifest" href="/images/site.webmanifest" />
            
            {/* Preload critical fonts */}
            <link
                rel="preload"
                href="/fonts/Inter-Regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Inter-Bold.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            
            <meta property="og:image" content="/images/Classic-Cambridge.jpg" />
            <meta property="og:title" content="Northshire Kitchens" />
            <meta property="og:description" content="Expertly crafted kitchens with precision and durability." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://northshirekitchens.com" />
        </head>
        <body className="antialiased scroll-smooth">
            <main className="relative">{children}</main>
        </body>
        </html>
    );
}
