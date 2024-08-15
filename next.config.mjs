/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/items/temp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/temp",
        destination: "/items",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
