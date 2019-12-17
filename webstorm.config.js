const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  resolve: {
    alias: {
      common: resolve("src/common"),
      components: resolve("src/components"),
      base: resolve("src/base"),
      api: resolve("src/api"),
      store: resolve("src/store")
    }
  }
};
