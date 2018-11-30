const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  optimization: {
    namedModules: true,
  },
  // plugins: ['react-hot-loader/babel']
});
