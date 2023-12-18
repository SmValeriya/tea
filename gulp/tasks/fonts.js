import gulp from "gulp";
import { existsSync } from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import plumber from "gulp-plumber";
import { paths } from "../config/paths.js";

const { src, dest } = gulp;

export const fonts = () => {
  const fontFacesFile = existsSync(paths.fonts.fontFacesFile);
  if (fontFacesFile) {
    return src(`${paths.fonts.src}*.{woff,woff2}`)
      .pipe(dest(paths.fonts.dist));
  } else {
    return src([
      `${paths.fonts.src}*.*`,
      `!${paths.fonts.src}*.{woff,woff2,ttf}`])
      .pipe(plumber())
      .pipe(fonter({ formats: ['ttf', 'woff'] }))
      .pipe(dest(paths.fonts.src))
      .pipe(src(`${paths.fonts.src}*.ttf`))
      .pipe(ttf2woff2())
      .pipe(plumber.stop())
      .pipe(dest(paths.fonts.src))
      .pipe(src(`${paths.fonts.src}*.{woff,woff2}`))
      .pipe(dest(paths.fonts.dist));
  }
}