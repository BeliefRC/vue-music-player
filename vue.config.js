const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        common: resolve("src/common"),
        components: resolve("src/components"),
        base: resolve("src/base"),
        api: resolve("src/api")
      }
    }
  }
};
