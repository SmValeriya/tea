import gulp from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import { paths } from "../gulp.config.js";
import { data } from "../../content.js";

export const views = () => {
  return gulp.src(paths.views.src)
    .pipe(plumber())
    .pipe(pug({
      data: data
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.views.dist))
}