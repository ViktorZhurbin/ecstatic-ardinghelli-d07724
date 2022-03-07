import * as path from "path";

import { merge } from "webpack-merge";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { commonConfig } from "./common";

export default merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["react-refresh/babel"],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    client: {
      logging: "warn",
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: "write-references",
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
});
