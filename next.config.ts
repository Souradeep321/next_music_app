import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true, // 👈 Temporarily ignore TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 Temporarily ignore ESLint errors
  },
};

export default nextConfig;

