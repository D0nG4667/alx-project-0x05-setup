import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["prlabsapi.com", "via.placeholder.com"],
  },
};

export default nextConfig;
