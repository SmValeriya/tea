import gulp from "gulp";
import revRewrite from "gulp-rev-rewrite";
import { readFileSync } from "fs";
import { paths, buildDir, revManifest } from "../gulp.config.js";

const { src, dest } = gulp;

export const reWriteDependencyNames = () => {
  const manifest = readFileSync(revManifest.path);
  return src(`${paths.views.dist}/*.html`)
    .pipe(revRewrite({ manifest: manifest }))
    .pipe(dest(buildDir));
};