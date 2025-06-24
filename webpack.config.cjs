const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    content: "./src/scripts/content.js",
    background: "./src/scripts/background.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean dist folder before each build
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile modern JS (optional if you're using ES6+)
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
