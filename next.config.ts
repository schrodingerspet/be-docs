import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/be-docs",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
