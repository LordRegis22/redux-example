const path = require('path');

module.exports = {
  entry: ['react-hot-loader/patch', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js|.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: [path.join(__dirname, 'client'), path.join(__dirname, 'dist')],
    port: 2222,
    hot: true,
  },
};
