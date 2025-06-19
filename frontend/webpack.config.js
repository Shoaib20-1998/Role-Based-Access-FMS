const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = () => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true, // Cleans output dir on build
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"], // So you can import without file extension
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        // {
        //   test: /\.tsx?$/,
        //   use: "ts-loader",
        //   exclude: /node_modules/,
        // },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
    devServer: {
      static: "./dist",
      port: 3000,
      open: true,
      hot: true,
    },
    mode: "development", // Change to 'production' for production build
  };
};
