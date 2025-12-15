import type { NextConfig } from "next";


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/rahulmadvisory',
  assetPrefix: '/rahulmadvisory/',
}
module.exports = nextConfig
export default nextConfig;
