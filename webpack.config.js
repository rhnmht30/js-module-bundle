const path = require("./node_modules/path/path");
const Dotenv = require("./node_modules/dotenv-webpack");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  mode: "development",
  node: {
    fs: "empty"
  },
  plugins: [new Dotenv()],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
