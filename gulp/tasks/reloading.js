import { watch } from 'gulp';
import { reload } from 'browser-sync';
import { path } from './../config';

const reloading = () => {
  watch(path.watch.pug, reload);
  watch(path.watch.js, reload);
  watch(path.watch.stylus, reload);
  watch(path.watch.images, reload);
  watch(path.watch.fonts, reload);
};

export default reloading;
