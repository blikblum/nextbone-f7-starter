const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const autoprefixer = require('autoprefixer')
const argv = require('webpack-nano/argv')

const DIST_DIR = 'dist'
const devDevTool = 'eval-source-map' // see https://webpack.js.org/configuration/devtool/ for options
const prodDevTool = 'source-map'

const { mode = 'production', data = 'local' } = argv
const isProd = mode === 'production'
const isPWA = false

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
  }),
  new webpack.DefinePlugin({
    FIREBASE_REMOTE_DATA: JSON.stringify(isProd || data === 'remote'),
  }),
]

const entry = ['./src/main.js']

if (isProd) {
  if (isPWA) {
    plugins.push(
      new GenerateSW({
        swDest: path.join('sw.js'),
      })
    )
  }
  plugins.push(
    new MiniCSSExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin()
  )
} else {
  // dev
  plugins.push(
    new WebpackPluginServe({
      host: 'localhost',
      port: 8084,
      static: path.resolve(__dirname, DIST_DIR),
      liveReload: true,
      hmr: false,
      open: false,
    })
  )

  entry.push('webpack-plugin-serve/client')
}

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, DIST_DIR),
    publicPath: '',
  },
  mode,
  node: {
    constants: false,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [path.resolve('src')],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCSSExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          isProd ? MiniCSSExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: isProd,
              plugins: [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.png$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src/common'), 'node_modules'],
  },
  plugins,
  devtool: isProd ? prodDevTool : devDevTool,
  watch: !isProd,
  watchOptions: {
    ignored: /node_modules/,
  },
}
