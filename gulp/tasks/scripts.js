import gulp from "gulp";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import plumber from "gulp-plumber";
import webpackConfig from "../../webpack.config.js";
import { paths } from "../gulp.config.js";

const { src, dest } = gulp;

export const scripts = () => {
  return src(paths.scripts.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(plumber.stop())
    .pipe(dest(paths.scripts.dist))
};