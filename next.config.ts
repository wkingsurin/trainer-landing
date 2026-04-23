import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.112'],
  images: {
    qualities: [25, 50, 75, 90]
  }
};

export default nextConfig;
