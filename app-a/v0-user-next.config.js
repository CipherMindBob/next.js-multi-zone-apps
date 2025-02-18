/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog",
  assetPrefix: "/blog",
  // Add experimental configuration for handling cross-origin requests
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ]
  },
}

module.exports = nextConfig

