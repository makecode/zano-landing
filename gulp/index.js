import { pugDev, pugProd } from './tasks/pug';
import { jsDev, jsProd } from './tasks/js';
import { stylusDev, stylusProd } from './tasks/stylus';
import { svgDev, svgProd } from './tasks/svg';
import images from './tasks/images';
import fonts from './tasks/fonts';
import clean from './tasks/clean';
import server from './tasks/server';
import watching from './tasks/watching';
import reloading from './tasks/reloading';

export {
  clean,
  pugDev, pugProd,
  jsDev, jsProd,
  stylusDev, stylusProd,
  svgDev, svgProd,
  images,
  fonts,
  server,
  watching,
  reloading
};
