import TerserPlugin from "terser-webpack-plugin";
import { isProd } from "./gulp/gulp.config.js";

export default {
  entry: {
    index: "./src/scripts/index.js",
    about: "./src/scripts/about.js",
  },

  output: {
    filename: "[name].min.js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  mode: isProd ? "production" : "development",
  devtool: isProd ? false : "source-map",
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin(),
    ]
  }
};