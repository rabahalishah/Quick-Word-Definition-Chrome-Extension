const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    content: "./src/scripts/content.js",
    background: "./src/scripts/background.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
