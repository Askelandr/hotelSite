const path = require(`path`);
const miniCss = import(`mini-css-extract-plugin`);
const entryPoints = import("./src/index.js");
const HTMLWebpackPlugin = import(`html-webpack-plugin`);
const { CleanWebpackPlugin } = import(`clean-webpack-plugin`);
const extractCSS = new ExtractTextPlugin("css/[name].style.min.css");
module.exports = {
  entry: entryPoints,
  output: {
    filename: `[name].[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
  },
  context: path.resolve(__dirname, `src`),
  plugins: [
    extractCSS,
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new HTMLWebpackPlugin({
      filename: "rooms.html",
      template: "./rooms.html",
      chunks: ["rooms"],
    }),
    new HTMLWebpackPlugin({
      filename: "facilities.html",
      template: "./facilities.html",
      chunks: ["facilities"],
    }),
    new HTMLWebpackPlugin({
      filename: "contactus.html",
      template: "./contactus.html",
      chunks: ["contactus"],
    }),
    new CleanWebpackPlugin(),
    new miniCss({ filename: "./src/css/style.scc" }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.css$/,
      //   use: [`style-loader`, `css-loader`],
      // },

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
        test: /.(s*)css$/,
        use: [
          miniCss.loader,
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
  optimization: {
    minimizer: [new minify({})],
  },
};
