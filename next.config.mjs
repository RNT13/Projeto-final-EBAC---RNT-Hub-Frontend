/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },

  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '8000', pathname: '/media/**' },
      { protocol: 'https', hostname: 'rnt-hub.onrender.com', pathname: '/media/**' }
    ]
  }
}

export default nextConfig
