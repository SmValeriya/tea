export const srcDir = 'src';
export const buildDir = 'build';

export const browserSyncOptions = {
  server: {
    baseDir: `./${buildDir}`
  },
  open: false,
  notify: false,
  cors: true
};

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir,
    watch: `./${srcDir}/pages/**/*.pug`
  }
};