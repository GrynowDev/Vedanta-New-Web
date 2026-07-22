/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vedantabyvaishnogroup.com",
          },
        ],
        destination: "https://www.vedantabyvaishnogroup.com/:path*",
        permanent: true,
      },
    ];
  },
};
