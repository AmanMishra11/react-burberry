import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 /* images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  }, config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
      },
      // Add other domains if needed (e.g., Vercel Blob Storage)
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'banner2.cleanpng.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.burberry.com',
      },
    ],
    //remotePatterns: [new URL('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/**', 'https://64.media.tumblr.com/**')],  https://i.pinimg.com/originals
  },// https://banner2.cleanpng.com
};

export default nextConfig;

