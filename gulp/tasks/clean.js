import { deleteAsync } from "del";
import { buildDir } from "../gulp.config.js";

export const clean = () => deleteAsync([buildDir]);