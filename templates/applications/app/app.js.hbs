require('../config/application');
require('../config/routes');
const m                 = require('mithril');
const TrackRouter       = require('track-router');
const TrackConfig       = require('track-config');
const TrackController   = require('track-controller');
const TrackEventManager = require('track-eventor/lib/manager');
const TrackI18n         = require('track-i18n');

const boot = (() => {
  const mountElement = document.querySelector('#app');

  TrackController.initialize(mountElement);
  TrackEventManager.initialize();

  m.route.prefix(TrackConfig.relativeUrlRoot || '');
  m.route(mountElement, '/', TrackRouter.mithrilRoutes)
});

const lang = TrackConfig.localeSelector(global.location.href);
if (lang) {
  m.request(TrackConfig.localeLoader(lang)).then((locale) => {
    TrackI18n.load(locale);
    boot();
  });
} else {
  boot();
}
