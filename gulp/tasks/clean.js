import { deleteAsync } from "del";
import { buildDir } from "../config/paths.js";

export const clean = () => deleteAsync([buildDir]);