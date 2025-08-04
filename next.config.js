/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce development logging
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
