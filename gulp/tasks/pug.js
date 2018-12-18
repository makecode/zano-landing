import { src, dest } from 'gulp';
import { stream } from 'browser-sync';
import { path } from './../config';
import errorHandler from './notify';

import pug from 'gulp-pug';
// import changed from 'gulp-changed';
import plumber from 'gulp-plumber';

const pugDev = () => src(path.src.pug)
  .pipe(plumber())
  // .pipe(changed(path.build.pug, { extension: '.html' }))
  .pipe(pug({ pretty: true }))
  .on('error', errorHandler)
  .pipe(dest(path.build.pug))
  .pipe(stream());

const pugProd = () => src(path.src.pug)
  .pipe(pug())
  .pipe(dest(path.build.pug));

export { pugDev, pugProd };
