import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import sassGlob from "gulp-sass-glob";
import autoPrefixer from "gulp-autoprefixer";
import groupmedia from "gulp-group-css-media-queries";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import { paths, isProd } from "../gulp.config.js";

const sass = gulpSass(dartSass);

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(isProd, groupmedia()))
    .pipe(gulpIf(isProd, autoPrefixer({
      cascade: false,
      grid: true
    })))
    .pipe(gulpIf(isProd, cleanCss()))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(plumber.stop())
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dist))
}