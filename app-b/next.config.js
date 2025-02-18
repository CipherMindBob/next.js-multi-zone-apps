/** @type {import('next').NextConfig} */
const nextConfig = {
  // Multi-zone specific configuration
  reactStrictMode: true,
  basePath: '/blog',
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? `${process.env.NEXT_PUBLIC_BLOG_URL}/blog`
    : '/blog',
  
  // Performance and build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  
  // Rewrites configuration
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