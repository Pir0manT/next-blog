/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'standalone',
  // images:{
  //   domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com","avatars.githubusercontent.com"]
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
