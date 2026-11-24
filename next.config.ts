import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
    qualities: [75, 95],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
