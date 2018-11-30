const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  devtool: "source-map",
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});
