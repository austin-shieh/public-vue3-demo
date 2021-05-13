const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: "~@/stylus/variable.styl",
      },
    },
  },
};

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
