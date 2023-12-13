import gulp from "gulp";
import { clean } from "./gulp/tasks/clean.js";
import { views } from "./gulp/tasks/views.js";
import { styles } from "./gulp/tasks/styles.js";
import { serve } from "./gulp/tasks/serve.js";

const { series, parallel } = gulp;

export {
  clean,
  views,
  styles
};

export default series(
  clean,
  parallel(views, styles),
  serve
);

export const build = series(
  clean,
  parallel(views, styles)
)