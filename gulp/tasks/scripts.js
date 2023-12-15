import gulp from "gulp";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import plumber from "gulp-plumber";
import gulpIf from "gulp-if";
import rev from "gulp-rev";
import webpackConfig from "../../webpack.config.js";
import { paths, isProd, revManifest } from "../gulp.config.js";

const { src, dest } = gulp;

export const scripts = () => {
  return src(paths.scripts.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpIf(isProd, rev()))
    .pipe(plumber.stop())
    .pipe(dest(paths.scripts.dist))
    .pipe(gulpIf(isProd, rev.manifest(revManifest.path, revManifest.options)))
    .pipe(gulpIf(isProd, dest(revManifest.options.base)));
};