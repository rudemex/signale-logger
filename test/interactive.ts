import { Signale, SignaleConstructorOptions } from '../';

const optInteractive: SignaleConstructorOptions = {
  interactive: true
};

const interactive = new Signale(optInteractive);

setTimeout(() => {
  interactive.success('[%d/4] - interactive A', 2);
  setTimeout(() => {
    interactive.await('[%d/4] - interactive B', 3);
    setTimeout(() => {
      interactive.error('[%d/4] - interactive C', 4);
      setTimeout(() => {}, 2000);
    }, 4000);
  }, 3000);
}, 2000);

const interactive2 = new Signale({...optInteractive});
setTimeout(() => {
  interactive2.info('[%d/3] - interactive2 A', 1);
  setTimeout(() => {
    interactive2.await('[%d/3] - interactive2 B', 2);
    setTimeout(() => {
      interactive2.success('[%d/3] - interactive2  C', 3);
      setTimeout(() => {}, 2000);
    }, 4000);
  }, 3000);
}, 2000);
