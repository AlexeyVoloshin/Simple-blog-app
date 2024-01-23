const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*-------------------------------------------------*/

module.exports = {
  mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',

  entry:
    'development' === process.env.NODE_ENV
      ? ['./src/index.dev.js']
      : ['./src/index.prod.js'],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build/[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                modules: {
                  mode: 'local',
                  auto: true,
                  exportGlobals: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  localIdentContext: path.resolve(__dirname, 'src'),
                  localIdentHashSalt: 'my-custom-hash',
                  namedExport: true,
                  exportLocalsConvention: 'camelCase',
                  exportOnlyLocals: false,
                },
                import: true,
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build/styles.css',
    }),

    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      minify: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets'),
          to: path.resolve(__dirname, './dist/assets'),
        },
      ],
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
    },
    open: true,
  },

  devtool: 'source-map',
};
