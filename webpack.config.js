const path = require('path');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: [
    
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 9000
  },
}