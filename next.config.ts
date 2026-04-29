import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/KeepRolling" : undefined,
  assetPrefix: isGitHubPages ? "/KeepRolling/" : undefined,
};

export default nextConfig;
