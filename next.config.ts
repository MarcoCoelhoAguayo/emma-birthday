import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const repoName = "emma-birthday";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? `/${repoName}` : "",
};

export default nextConfig;
