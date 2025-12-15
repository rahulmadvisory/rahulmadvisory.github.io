import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/docs',
  assetPrefix: 'https://rahulmadvisory.github.io/docs/',
  trailingSlash: true,
  images: {
    unoptimized: true  // Required for GitHub Pages
  }
}

module.exports = nextConfig
