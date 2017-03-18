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
      {test: /\.js|\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loaders: ["style", "css?modules"]},
      {test: /\.html$/, loader: "file?name=[name].[ext]"},
      {test: /\.jpg$/, loader: "file?name=[path][name].[ext]"}
    ]
  },
  resolve: {
    root: [__dirname + "/src/components"],
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  }
}
