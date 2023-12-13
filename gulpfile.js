import gulp from "gulp";
import { clean } from "./gulp/tasks/clean.js";
import { views } from "./gulp/tasks/views.js";
import { serve } from "./gulp/tasks/serve.js";

const { series, parallel } = gulp;

export {
  clean,
  views,
};

export default series(
  clean,
  parallel(views),
  serve
);