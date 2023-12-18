import { buildDir } from "./paths.js";

export const revManifest = {
  path: `${buildDir}/rev-manifest.json`,
  options: {
    base: `./${buildDir}`,
    merge: true
  }
};