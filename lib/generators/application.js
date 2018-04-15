const {exec} = require('child_process');

/**
 * Define appliation generator.
 * @param {Plop} plop Plop object.
 */
module.exports = function(plop) {
  plop.setGenerator('application', {
    description: 'Application generator',
    prompts:     [{
      type:    'input',
      name:    'appName',
      message: 'Input application name',
    }],
    actions: [{
      type:         'add',
      path:         '{{rootDir}}/.babelrc',
      templateFile: '{{templateDir}}/applications/babelrc.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/.env.example',
      templateFile: '{{templateDir}}/applications/env.example.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/.gitattributes',
      templateFile: '{{templateDir}}/applications/gitattributes.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/.gitignore',
      templateFile: '{{templateDir}}/applications/gitignore.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/package.json',
      templateFile: '{{templateDir}}/applications/package.json.hbs',
      force:        true,
    }, {
      type:         'add',
      path:         '{{rootDir}}/postcss.config.js',
      templateFile: '{{templateDir}}/applications/postcss.config.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/webpack.config.js',
      templateFile: '{{templateDir}}/applications/webpack.config.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/app.js',
      templateFile: '{{templateDir}}/applications/app/app.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/assets/styles/app.scss',
      templateFile: '{{templateDir}}/applications/app/assets/styles/app.scss.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/components/application_component.js',
      templateFile: '{{templateDir}}/applications/app/components/application_component.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/controllers/application_controller.js',
      templateFile: '{{templateDir}}/applications/app/controllers/application_controller.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/view_models/application_view_model.js',
      templateFile: '{{templateDir}}/applications/app/view_models/application_view_model.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/views/controllers/application.js',
      templateFile: '{{templateDir}}/applications/app/views/controllers/application.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/views/controllers/errors/error.js',
      templateFile: '{{templateDir}}/applications/app/views/controllers/errors/error.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/views/controllers/layouts/default.js',
      templateFile: '{{templateDir}}/applications/app/views/controllers/layouts/default.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/bin/server.js',
      templateFile: '{{templateDir}}/applications/bin/server.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/config/application.js',
      templateFile: '{{templateDir}}/applications/config/application.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/config/boot.js',
      templateFile: '{{templateDir}}/applications/config/boot.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/config/routes.js',
      templateFile: '{{templateDir}}/applications/config/routes.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/config/initializers/server.js',
      templateFile: '{{templateDir}}/applications/config/initializers/server.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/config/locales/en.yml',
      templateFile: '{{templateDir}}/applications/config/locales/en.yml.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/public/index.html',
      templateFile: '{{templateDir}}/applications/public/index.html.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/tests/spec_helper.js',
      templateFile: '{{templateDir}}/applications/tests/spec_helper.js.hbs',
    }, function() {
      const packages = [
        'mithril',
        'track-packages',
        'track-server-cache-lru-cache',
        'track-server-middleware-fastify',
      ].join(' ');
      const devPackages = [
        'track-generator',
        'track-spec',
      ].join(' ');

      const rootDir    = plop.getHelper('rootDir')();
      const installCmd = `npm install --save ${packages} && npm install --save-dev ${devPackages}`;

      console.log('Installing packages, please wait for a few minutes...');
      return new Promise((resolve, reject) => {
        exec(installCmd, {cwd: rootDir}, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Install: ${packages} ${devPackages}`);
          }
        });
      });
    }],
  });
};
