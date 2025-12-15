import type { NextConfig } from "next";


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/rahulmadvisory',
  assetPrefix: 'https://rahulmadvisory.github.io/rahulmadvisory/',
}
module.exports = nextConfig
export default nextConfig;
