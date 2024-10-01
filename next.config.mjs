/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["img.freepik.com", "pagedone.io"],
  },
};

export default nextConfig;
