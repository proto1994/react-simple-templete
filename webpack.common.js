const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: webpack } = require("webpack");

const DashboardPlugin = require("webpack-dashboard/plugin");

const isProd = process.env.ENV === "production";

module.exports = {
  entry: {
    app: "./src/app",
    vender: ["react", "react-dom"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: !isProd ? "" : "./",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10240,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-simple-templete",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].[chunkhash].css",
    }),
    new DashboardPlugin(),
  ],
};
