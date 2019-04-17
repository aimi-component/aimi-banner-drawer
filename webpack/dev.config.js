const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader:'css-loader'},
            {loader: 'postcss-loader', options: {
              config: {
                path: './' 
              }
            }}, 
            {loader:'sass-loader'}
          ]
        }),
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: 'style.min.css',
      allChunks: true 
    }),
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
};
