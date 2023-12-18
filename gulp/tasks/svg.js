import gulp from "gulp";
import svgo from "gulp-svgo";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import { paths } from "../config/paths.js";
import { svgoPlugins } from "../config/svgConfig.js";

const { src, dest } = gulp;

export const svg = () => {
  return src(paths.svg.src)
    .pipe(plumber())
    .pipe(svgo(svgoPlugins))
    .pipe(rename({ dirname: "" }))
    .pipe(plumber.stop())
    .pipe(dest(paths.svg.dist));
};