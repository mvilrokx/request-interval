const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'requestInterval.js',
    library: 'requestInterval',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }, {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
      },
    ],
  },
}
