import type { NextConfig } from "next";


const nextConfig = {
  basePath: '/docs',
  assetPrefix: 'https://rahulmadvisory.github.io/docs/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true  // GitHub Pages doesn't support Next.js image optimization
  }
}
module.exports = nextConfig
