const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = relPath => path.resolve(__dirname, relPath);

module.exports = {
  entry: {
    main: ["./index.js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve("dist"),
  },
  context: resolve("src"),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /\bcore-js\b/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      template: resolve("src/index.ejs"),
    }),
  ],
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
};
