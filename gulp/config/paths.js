export const srcDir = "src";
export const buildDir = "build";

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
  fonts: {
    src: `./${srcDir}/fonts/`,
    dist: `./${buildDir}/fonts/`,
    fontFacesFile: `${srcDir}/styles/layout/fonts.scss`,
  },
};