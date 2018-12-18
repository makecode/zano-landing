import { src, dest, series } from 'gulp';
import { stream } from 'browser-sync';
import { path } from '../config';
import errorHandler from './notify';

import sourcemaps from 'gulp-sourcemaps';
import styl from 'gulp-stylus';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import plumber from 'gulp-plumber';

const stylusConfig = {
  'include css': true
};

const lint = () => {
  const gulpStylelint = require('gulp-stylelint');// eslint-disable-line

  return src(path.allStylus)
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    })).on('error', errorHandler);
};

const dev = () => src(path.src.stylus)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(styl(stylusConfig))
  .on('error', errorHandler)
  .pipe(postcss([
    autoprefixer({
      browsers: ['last 10 versions']
    })
  ]))
  .pipe(sourcemaps.write())
  .pipe(dest(path.build.stylus))
  .pipe(stream());

const prod = () => src(path.src.stylus)
  .pipe(styl(stylusConfig)).on('error', errorHandler)
  .pipe(postcss([
    autoprefixer({
      browsers: ['last 10 versions']
    }),
    cssnano()
  ]))
  .pipe(dest(path.build.stylus));

const stylusDev = series(dev, lint);
const stylusProd = series(prod, lint);

export { stylusDev, stylusProd };
