import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://github.com/LucasFLan.png")],
  },
};

export default nextConfig;
