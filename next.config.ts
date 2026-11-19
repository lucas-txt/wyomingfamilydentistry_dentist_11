import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Every source image is already optimized to WebP and sized for its slot.
  // Serving them directly avoids flaky optimizer cache races on mounted drives
  // and keeps parallel QA workers deterministic.
  images: { unoptimized: true },
};

export default nextConfig;
