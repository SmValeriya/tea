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
import rev from "gulp-rev";
import { paths, isProd, revManifest } from "../gulp.config.js";

const sass = gulpSass(dartSass);
const { src, dest } = gulp;

export const styles = () => {
  return src(paths.styles.src)
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
    .pipe(gulpIf(isProd, rev()))
    .pipe(plumber.stop())
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(dest(paths.styles.dist))
    .pipe(gulpIf(isProd, rev.manifest(revManifest.path, revManifest.options)))
    .pipe(gulpIf(isProd, dest(revManifest.options.base)));
}