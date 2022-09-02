const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "./js/[name].[contenthash].js", // oluşturulacak bundle dosyasının ismi
    path: path.resolve(__dirname, "dist"), // oluşturulacak bundle dosyası hangi klasörde olacak
    clean: true,
    assetModuleFilename: "img/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/, // sonu .sass .scss ile biten dosyaları yakalar
        use: [
          MiniCssExtractPlugin.loader, // Step 3: parse edilen css kodlarını DOM a yükler
          "css-loader", // Step 2: çevrilen css kodlarını alıp parse eder
          "sass-loader", // Step1 : sass stillerini css e çevirir
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    }),
  ],
});
