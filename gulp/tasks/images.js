import gulp from "gulp";
import gulpAvif from "gulp-avif";
import webp from "gulp-webp";
import gulpIf from "gulp-if";
import imagemin, { gifsicle, mozjpeg, optipng } from "gulp-imagemin";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import { isProd } from "../gulp.config.js";
import { paths } from "../config/paths.js";

const { src, dest } = gulp;

export const images = () => {
  return src(paths.images.src)
    .pipe(plumber())
    //.pipe(gulpAvif())
    .pipe(src(paths.images.src))
    .pipe(webp())
    .pipe(src(paths.images.src))
    .pipe(gulpIf(isProd, imagemin([
      gifsicle({
        optimizationLevel: 3
      }),
      optipng({
        optimizationLevel: 5
      }),
      mozjpeg({
        quality: 75
      })
    ])))
    .pipe(rename({ dirname: "" }))
    .pipe(plumber.stop())
    .pipe(dest(paths.images.dist));
};