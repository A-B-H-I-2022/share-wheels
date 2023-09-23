/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [require("@supabase/auth-helpers-nextjs")],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "en.wikipedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
