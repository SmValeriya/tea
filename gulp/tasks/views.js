import gulp from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import { paths, isProd } from "../gulp.config.js";
import { data } from "../../content.js";

const { src, dest } = gulp;

export const views = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(pug({
      data: data,
      pretty: !isProd
    }))
    .pipe(plumber.stop())
    .pipe(dest(paths.views.dist))
}