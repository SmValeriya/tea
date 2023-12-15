export const srcDir = 'src';
export const buildDir = 'build';
export const isProd = process.argv.includes('--production');

export const browserSyncOptions = {
  server: {
    baseDir: `./${buildDir}`
  },
  open: false,
  notify: false,
  cors: true
};

export const revManifest = {
  path: `${buildDir}/rev-manifest.json`,
  options: {
    base: `./${buildDir}`,
    merge: true
  }
};

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir,
    watch: `./${srcDir}/pages/**/*.pug`
  },
  styles: {
    src: `./${srcDir}/styles/*.scss`,
    dist: `./${buildDir}/styles/`,
    watch: `./${srcDir}/styles/**/*.scss`
  },
  scripts: {
    src: `./${srcDir}/scripts/*.js`,
    dist: `./${buildDir}/scripts/`,
    watch: `./${srcDir}/scripts/**/*.js`
  },
};