/*eslint-disable no-var */
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, './src/app.js'),
  output: {
    filename: 'app.js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
