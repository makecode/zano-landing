import { src, dest } from 'gulp';
import { path } from '../config';

import sprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import gulpIf from 'gulp-if';

const config = {
  mode: {
    symbol: {
      dest: '.', // Main output directory
      sprite: 'sprite.svg'
    }
  }
};

const svgDev = () => src(path.src.svg)
  .pipe(sprite(config))
  .pipe(gulpIf('*.styl', dest(path.svgStylusFile), dest(path.build.svg)));


const svgProd = () => src(path.src.svg)
  .pipe(svgmin())
  .pipe(sprite(config))
  .pipe(gulpIf('*.styl', dest(path.svgStylusFile), dest(path.build.svg)));

export { svgDev, svgProd };
