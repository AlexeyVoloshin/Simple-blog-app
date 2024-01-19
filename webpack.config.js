const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/*-------------------------------------------------*/

module.exports = {
  // режим webpack оптимизации
  mode: "development" === process.env.NODE_ENV ? "development" : "production",

  entry:
    "development" === process.env.NODE_ENV
      ? [
          "./src/index.dev.js", // in development
        ]
      : [
          "./src/index.prod.js", // in production
        ],

  // выходные файлы и чанки
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build/[name].js",
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    //   {
    //     test: /\.css$/i,
    //     loader: "css-loader",
    //     options: {
    //       modules: {
    //         mode: "local",
    //         auto: true,
    //         exportGlobals: true,
    //         localIdentName: "[path][name]__[local]--[hash:base64:5]",
    //         localIdentContext: path.resolve(__dirname, "src"),
    //         localIdentHashSalt: "my-custom-hash",
    //         namedExport: true,
    //         exportLocalsConvention: "camelCase",
    //         exportOnlyLocals: false,
    //       },
    //     },
    //   },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    }
    ],
  },

  // webpack плагины
  plugins: [
    // выделение css во внешний файл таблицы стилей
    new MiniCssExtractPlugin({
      filename: "build/styles.css",
    }),

    // подготовка HTML файла с ресурсами
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      minify: false,
    }),

    // копирование статических файлов из `src` в `dist`
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },

  // webpack оптимизации
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: "all",
          name: "vendor",
          test: /node_modules/,
        },
      },
    },
  },

  devServer: {
    port: 8080,
    // historyApiFallback: true,
    hot: false,
  },

  devtool: "source-map",
};
