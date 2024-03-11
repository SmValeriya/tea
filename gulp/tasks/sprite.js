import gulp from "gulp";
import svgo from "gulp-svgo";
import svgSprite from "gulp-svg-sprite";
import plumber from "gulp-plumber";
import { paths } from "../config/paths.js";
import { isProd } from "../gulp.config.js"
import { svgoPluginsSprite } from "../config/svgConfig.js";

const { src, dest } = gulp;

export const sprite = () => {
  return src(paths.sprite.src)
    .pipe(plumber())
    .pipe(svgo(svgoPluginsSprite))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg',
          example: !isProd,
        }
      }
    }))
    .pipe(plumber.stop())
    .pipe(dest(paths.sprite.dist));
};