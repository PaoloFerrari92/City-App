const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'scr/script.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'scr/index.html')
    }),
    new Dotenv()
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']

      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      }
    ]
  }
}
