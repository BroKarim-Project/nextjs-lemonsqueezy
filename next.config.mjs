/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "utfs.io",
  //     },
  //   ],
  // },
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
};

export default nextConfig;
