const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
module.exports = {
  entry: {
    main: `./index.js`,
  },
  output: {
    filename: `[name].[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
  },
  context: path.resolve(__dirname, `src`),
  plugins: [
    new HTMLWebpackPlugin({
      template: `./index.html`,
    }),
    new HTMLWebpackPlugin({
      filename: "rooms.html",
      template: "./rooms.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },

      // {
      //   test: /\.(png|jpe?g|svg|gif)$/,
      //   use: [`file-loader`],
      // },
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   include: /img/,
      //   loader: "url",
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
