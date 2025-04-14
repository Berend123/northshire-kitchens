#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Geist fonts from CDN
curl -L "https://cdn.jsdelivr.net/gh/vercel/geist-font@1.1.0/dist/fonts/geist-regular.woff2" -o "public/fonts/Geist-Regular.woff2"
curl -L "https://cdn.jsdelivr.net/gh/vercel/geist-font@1.1.0/dist/fonts/geist-bold.woff2" -o "public/fonts/Geist-Bold.woff2"
curl -L "https://cdn.jsdelivr.net/gh/vercel/geist-font@1.1.0/dist/fonts/geist-mono-regular.woff2" -o "public/fonts/GeistMono-Regular.woff2"
curl -L "https://cdn.jsdelivr.net/gh/vercel/geist-font@1.1.0/dist/fonts/geist-mono-bold.woff2" -o "public/fonts/GeistMono-Bold.woff2"

echo "Fonts downloaded successfully!" 