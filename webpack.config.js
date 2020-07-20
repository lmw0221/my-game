const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: "bulid.js",
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  }
}