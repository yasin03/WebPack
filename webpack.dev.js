const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // de-server açacağı klasör
    },
    port: 9000,
    watchFiles: ["src/*.html", "src/*.scss"], // değişiklikleri takip edeceği noktalar
    hot: true, // anlık güncelleme
  },
  output: {
    filename: "./js/[name].js", // oluşturulacak bundle dosyasının ismi
    path: path.resolve(__dirname, "dist"), // oluşturulacak bundle dosyası hangi klasörde olacak
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/, // sonu .sass .scss ile biten dosyaları yakalar
        use: [
          "style-loader", // Step 3: parse edilen css kodlarını DOM a yükler
          "css-loader", // Step 2: çevrilen css kodlarını alıp parse eder
          "sass-loader", // Step1 : sass stillerini css e çevirir
        ],
      },
    ],
  },
});
