const path = require("path");   //引入path

function resolve(dir) {         //封装一个通用方法
  return path.resolve(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("assets", resolve("src/assets"))
    .set("common", resolve("src/common"))
    .set("components", resolve("src/components"))
    .set("network", resolve("src/network"))
    .set("views", resolve("src/views"))
  },
  publicPath:'./'
}
