import gulp from "gulp";
import { clean } from "./gulp/tasks/clean.js";
import { views } from "./gulp/tasks/views.js";

const { series, parallel } = gulp;

export {
  clean,
  views,
};

export default series(
  clean,
  parallel(views)
);