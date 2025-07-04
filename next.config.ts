import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";
import terserConfig from "./terser.config";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            ...terserConfig,
          },
          extractComments: false,
        }),
      ];
    }
    return config;
  },
};

export default nextConfig;
