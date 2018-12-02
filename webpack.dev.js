const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  optimization: {
    namedModules: true,
  },
});
