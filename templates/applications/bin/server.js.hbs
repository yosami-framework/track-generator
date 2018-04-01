require('../config/initializers/server');
require('../config/application');
require('../config/routes');
const path        = require('path');
const Asset       = require('track-server-renderer/lib/asset');
const Middleware  = require('track-server-middleware-fastify');
const Manifest    = require('../public/assets/manifest.json');
const TrackRouter = require('track-router');
const TrackServer = require('track-server');

const isTest     = (process.argv[2] == 'test');
const instanceId = (parseInt(process.env.NODE_APP_INSTANCE) || 0);
const port       = (parseInt(process.env.PORT || 3001) + instanceId);

const middleware = new Middleware();
const routes     = TrackRouter.mithrilRoutes;
const asset      = new Asset(path.resolve(__dirname, '..', 'public'), Manifest['app.js'], Manifest['app.scss']);

TrackServer.start(middleware, routes, asset, isTest ? 8888 : port).then(() => {
  if (isTest) {
    console.log('Server launching test is ok.');
    process.exit(0);
  }
});
