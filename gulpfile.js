import gulp from "gulp";
import { clean } from "./gulp/tasks/clean.js";
import { views } from "./gulp/tasks/views.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { serve } from "./gulp/tasks/serve.js";
import { reWriteDependencyNames } from './gulp/tasks/revrewrite.js';

const { series, parallel } = gulp;

export {
  clean,
  views,
  styles,
  scripts,
  reWriteDependencyNames
};

export default series(
  clean,
  parallel(views, styles, scripts),
  serve
);

export const build = series(
  clean,
  parallel(views, styles, scripts),
  reWriteDependencyNames
)