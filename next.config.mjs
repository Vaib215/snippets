/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "beeimg.com",
      },
    ],
  },
};

export default nextConfig;
