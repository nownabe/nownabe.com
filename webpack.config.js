var webpack = require("webpack")
var BrowserSyncPlugin = require("browser-sync-webpack-plugin")

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loaders: ["style", "css?modules"]},
      {test: /\.html$/, loader: "file?name=[name].[ext]"},
      {test: /\.jpg$/, loader: "file?name=[path][name].[ext]"}
    ]
  },
  resolve: {
    extensions: ["", ".js"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        server: { baseDir: ["."] }
      }
    )
  ]
}
