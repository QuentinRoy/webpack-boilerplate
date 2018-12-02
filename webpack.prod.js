const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  devtool: "source-map",
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: "production" }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  optimization: {
    splitChunks: { chunks: "all" },
  },
});
