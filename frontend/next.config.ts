import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/board",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
