export const path = {
  allStylus: 'src/styles/**/*.styl',
  svgStylusFile: 'src/stylus/libs/',

  src: {
    pug: 'src/pug/pages/*.pug',
    stylus: 'src/stylus/style.styl',
    js: 'src/js/app.js',
    images: 'src/media/images/**/*.{jpg,png,svg,gif}',
    svg: 'src/media/svg/*.svg',
    fonts: 'src/media/fonts/*.*'
  },
  build: {
    pug: 'build/',
    stylus: 'build/',
    js: 'build/',
    images: 'build/assets/',
    svg: 'build/assets/',
    fonts: 'build/assets/'
  },
  watch: {
    pug: 'src/pug/**/*.pug',
    stylus: 'src/stylus/**/*.styl',
    js: 'src/js/**/*.js',
    images: 'src/media/images/*.{jpg,png,svg,gif}',
    svg: 'src/media/svg/*.svg',
    fonts: 'src/media/fonts/**/*.*'
  }
};
