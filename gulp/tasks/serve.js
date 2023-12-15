import gulp from "gulp";
import { paths, browserSyncOptions } from "../gulp.config.js";
import browserSync from "browser-sync";
const { series, watch } = gulp;
const bs = browserSync.create();

export const serve = (done) => {
  bs.init(browserSyncOptions);
  watch(paths.views.watch, series('views', reload));
  watch(paths.styles.watch, series('styles', reload));
  watch(paths.scripts.watch, series('scripts', reload));

  return done();
};

function reload(done) {
  bs.reload();
  done();
}