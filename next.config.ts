import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vintory.ca",
      },
      {
        protocol: "https",
        hostname: "api.allreports.tools",
      },
    ]
  }
};

export default nextConfig;
