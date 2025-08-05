/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce development logging
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  
  // Optimal configuration for Vercel deployment with client components
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
