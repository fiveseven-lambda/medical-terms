const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  resolve: {
    extensions: ['.jsx', '...']
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ]
}
