/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
let config = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 1 day
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@tabler/icons-react",
      "react-icons",
      "framer-motion",
    ],
  },

  // Turbopack configuration (stable)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Bundle optimization
  webpack: (config, { dev, isServer, webpack }) => {
    // Optimize for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            reuseExistingChunk: true,
          },
          animation: {
            test: /[\\/]node_modules[\\/](framer-motion|gsap|motion)[\\/]/,
            name: "animation",
            priority: 20,
            reuseExistingChunk: true,
          },
          icons: {
            test: /[\\/]node_modules[\\/](@tabler\/icons-react|lucide-react|react-icons)[\\/]/,
            name: "icons",
            priority: 20,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Optimize SVG loading
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

// Add bundle analyzer in development
if (process.env.ANALYZE === "true") {
  const { default: bundleAnalyzer } = await import("@next/bundle-analyzer");
  const withBundleAnalyzer = bundleAnalyzer({
    enabled: true,
  });
  config = withBundleAnalyzer(config);
}

export default config;
