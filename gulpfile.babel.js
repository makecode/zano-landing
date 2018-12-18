import { series, parallel } from 'gulp';
import {
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
} from './gulp';

const dev = series(
  clean,
  series(pugDev, jsDev, svgDev, stylusDev, images, fonts),
  parallel(server, watching, reloading)
);

const build = series(
  clean,
  parallel(pugProd, jsProd, svgProd, stylusProd, images, fonts)
);

export {
  build, dev, clean
};

export default dev;
