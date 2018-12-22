import { src, dest, series } from 'gulp';
import { stream } from 'browser-sync';
import { path } from '../config';
import errorHandler from './notify';

import babel from 'gulp-babel';
import include from 'gulp-include';
import eslint from 'gulp-eslint';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
// import browserify from 'browserify';
// import babelify from 'babelify';

const lint = () => src([path.src.js, './gulp/**/*.js', './*.js'])
  .pipe(eslint())
  .pipe(plumber())
  .pipe(eslint.format())
  .on('error', errorHandler);

const dev = () => src(path.src.js)
  .pipe(include())
  .pipe(babel())
  .pipe(dest(path.build.js))
  .pipe(stream());

const prod = () => src(path.src.js)
  .pipe(include())
  .pipe(babel())
  .pipe(uglify())
  .pipe(dest(path.build.js))
  .pipe(stream());

const jsDev = series(dev, lint);
const jsProd = series(prod, lint);

export { jsDev, jsProd };
