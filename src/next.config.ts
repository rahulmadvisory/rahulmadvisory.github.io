import type { NextConfig } from "next";


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '/',
}
module.exports = nextConfig
