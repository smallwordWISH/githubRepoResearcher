// release用的專案

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|md)$/,
        use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=images/svg+xml'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },

    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: process.env.PORT || 8080,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['*', '.json', '.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src'),
    ],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      images: path.resolve(__dirname, 'src/images'),
      libs: path.resolve(__dirname, 'src/libs'),
      historyLib: path.resolve(__dirname, 'src/historyLib'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Github Repo Researcher',
      filename: 'index.html',
      favicon: './src/favicon.ico',
      template: './src/index.html',
      // hash: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: './css/[name].[hash].css',
      disable: false,
    }),
  ],
};
