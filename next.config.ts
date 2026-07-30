import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cbcbs.com" }],
        destination: "https://www.cbcbs.com/:path*",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
