const path = require('path');

module.exports = {
  entry: path.resolve('./src/lib/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
  },
  mode: process.env.MODE || 'development',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
