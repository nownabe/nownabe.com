module.exports = {
  context: __dirname + "/src",
  entry: {
    bundle: "./index.js",
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.js|\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loaders: ["style-loader", "css-loader?modules"]},
      {test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]"}
    ]
  },
  resolve: {
    modules: [__dirname + "/src/components", __dirname + "/node_modules"],
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  }
}
