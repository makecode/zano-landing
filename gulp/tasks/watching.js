import { watch } from 'gulp';
import { path } from './../config';
import {
  pugDev, stylusDev, jsDev, images, fonts
} from '../index';

const watching = () => {
  watch(path.watch.pug, pugDev);
  watch(path.watch.js, jsDev);
  watch(path.watch.stylus, stylusDev);
  watch(path.watch.images, images);
  watch(path.watch.fonts, fonts);
};

export default watching;
