/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boubyan.bankboubyan.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
