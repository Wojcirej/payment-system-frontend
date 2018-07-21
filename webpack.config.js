var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: "./src/assets/",
    to: "./assets/"
  }
]);

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: [ './node_modules/']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
  },
  output: {
    filename: './[name].js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
