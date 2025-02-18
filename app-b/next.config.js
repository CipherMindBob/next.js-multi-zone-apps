/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/blog',
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? `${process.env.NEXT_PUBLIC_BLOG_URL}/blog`
    : '/blog',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 