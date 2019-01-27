/*
*  more info:
*    https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
*    https://qiita.com/yoshimo123/items/b8c34a74d87ef4eaf8f7
*/
// dev用的設定檔
const path = require('path');
// const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  favicon: './src/favicon.ico',
  filename: './index.html',
});

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
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
      },
      // {
      //   test: /\.(png|jpg|gif|md)$/,
      //   use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]'],
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   use: ['url-loader?limit=10000&mimetype=images/svg+xml'],
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader',
      // },

    ],
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src'),
    ],
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      historyLib: path.resolve(__dirname, 'src/historyLib'),
      configs: path.resolve(__dirname, 'src/configs'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 5000,
    // disableHostCheck: true,
  },
};
