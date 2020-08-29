'use strict';
const figures = require('figures');

module.exports = {
  error: {
    badge: figures.cross,
    color: 'red',
    label: 'error',
    logLevel: 'error'
  },
  fatal: {
    badge: figures.cross,
    color: 'red',
    label: 'fatal',
    logLevel: 'error'
  },
  alert: {
    badge: figures('⬤'),
    color: 'red',
    label: 'alert',
    logLevel: 'error'
  },
  fav: {
    badge: figures('❤'),
    color: 'magenta',
    label: 'favorite',
    logLevel: 'debug'
  },
  info: {
    badge: figures.info,
    color: 'blue',
    label: 'info',
    logLevel: 'debug'
  },
  star: {
    badge: figures.star,
    color: 'yellow',
    label: 'star',
    logLevel: 'info'
  },
  success: {
    badge: figures.tick,
    color: 'green',
    label: 'success',
    logLevel: 'debug'
  },
  wait: {
    badge: figures.ellipsis,
    color: 'blue',
    label: 'waiting',
    logLevel: 'info'
  },
  warn: {
    badge: figures.warning,
    color: 'yellow',
    label: 'warning',
    logLevel: 'debug'
  },
  complete: {
    badge: figures.checkboxOn,
    color: 'cyan',
    label: 'complete',
    logLevel: 'info'
  },
  pending: {
    badge: figures.checkboxOff,
    color: 'magenta',
    label: 'pending',
    logLevel: 'debug'
  },
  note: {
    badge: figures.bullet,
    color: 'blue',
    label: 'note',
    logLevel: 'debug'
  },
  start: {
    badge: figures.play,
    color: 'green',
    label: 'start',
    logLevel: 'debug'
  },
  pause: {
    badge: figures.squareSmallFilled,
    color: 'yellow',
    label: 'pause',
    logLevel: 'debug'
  },
  debug: {
    badge: figures('⬤'),
    color: 'red',
    label: 'debug',
    logLevel: 'debug'
  },
  await: {
    badge: figures.ellipsis,
    color: 'blue',
    label: 'awaiting',
    logLevel: 'info'
  },
  watch: {
    badge: figures.ellipsis,
    color: 'yellow',
    label: 'watching',
    logLevel: 'debug'
  },
  log: {
    badge: '',
    color: '',
    label: '',
    logLevel: 'debug'
  }
};
