const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = relPath => path.resolve(__dirname, relPath);

module.exports = {
  entry: {
    main: ["./index.js"],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    // path: resolve("dist")
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      template: resolve("src/index.ejs"),
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all",
        },
      },
    },
  },
};
