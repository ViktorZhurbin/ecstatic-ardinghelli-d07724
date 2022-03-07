import { merge } from "webpack-merge";

import { commonConfig } from "./common";

export default merge(commonConfig, {
  mode: "production",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
});
