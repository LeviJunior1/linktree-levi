const modeDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: modeDev ? "development" : "production",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: __dirname + "/public",
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name][ext]`;
    },
  },
  devServer: {
    static: {
      directory: "./public",
    },
    port: 9000,
    hot: true,
    liveReload: true,
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin({}),
      new HtmlMinimizerPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.js$/,
      },
      {
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
