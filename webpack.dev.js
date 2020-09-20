const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: "3000",
    inline: true,
    proxy: {
      // 注意把axios的baseURL清掉
      "/mock/*": {
        target: "http://localhost:8018",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
