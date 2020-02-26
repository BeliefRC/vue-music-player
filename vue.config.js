const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        common: resolve("src/common"),
        components: resolve("src/components"),
        base: resolve("src/base"),
        api: resolve("src/api"),
        store: resolve("src/store")
      }
    }
  },
  devServer: {
    proxy: {
      "/splcloud/": {
        target: "https://c.y.qq.com/",
        headers: {
          referer: "https://c.y.qq.com/",
          host: "c.y.qq.com"
        }
      },
      "/lyric/": {
        target: "https://c.y.qq.com/",
        headers: {
          referer: "https://c.y.qq.com/",
          host: "c.y.qq.com"
        }
      }
    }
  }
};
