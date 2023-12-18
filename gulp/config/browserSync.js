import { buildDir } from "./paths.js";

export const browserSyncOptions = {
  server: {
    baseDir: `./${buildDir}`
  },
  open: false,
  notify: false,
  cors: true
};