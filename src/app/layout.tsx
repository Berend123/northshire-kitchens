import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
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
        url: "https://yourwebsite.com", // Replace with your actual domain
        siteName: "Northshire Kitchens",
        images: [
            {
                url: "/images/og-image.jpg", // Add an OG image to /public/images/
                width: 1200,
                height: 630,
                alt: "Northshire Kitchens",
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
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:title" content="Northshire Kitchens" />
            <meta property="og:description" content="Expertly crafted kitchens with precision and durability." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yourwebsite.com" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <main className="relative">{children}</main>
        </body>
        </html>
    );
}
