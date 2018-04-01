/**
 * Define controller generator.
 * @param {Plop} plop Plop object.
 */
module.exports = function(plop) {
  plop.setHelper('controllerRoute', function(name) {
    const names = name.split('/').reverse();

    let route = '';
    for (let i = 0; i < names.length; ++i) {
      const pad = Array(...Array((names.length - i) * 2)).map(() => ' ').join('');

      if (i == 0) {
        route = `${pad}get('${names[i]}', {to: '${name}', as: '${name.replace(/\//, '_')}'});`;
      } else {
        route = `${pad}namespace('${names[i]}', () => {\n${route}\n${pad}});`;
      }
    }

    return route;
  });

  plop.setGenerator('controller', {
    description: 'Controller generator',
    prompts:     [{
      type:    'input',
      name:    'name',
      message: 'Input controller name',
    }],
    actions: [{
      type:         'add',
      path:         '{{rootDir}}/app/controllers/{{fileName name}}_controller.js',
      templateFile: '{{templateDir}}/controllers/controller.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/view_models/controllers/{{fileName name}}.js',
      templateFile: '{{templateDir}}/controllers/view_model.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/views/controllers/{{fileName name}}.js',
      templateFile: '{{templateDir}}/controllers/view.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/assets/styles/controllers/{{fileName name}}.scss',
      templateFile: '{{templateDir}}/controllers/style.scss.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/tests/controllers/{{fileName name}}_controller_spec.js',
      templateFile: '{{templateDir}}/controllers/controller_spec.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/tests/view_models/controllers/{{fileName name}}_spec.js',
      templateFile: '{{templateDir}}/controllers/view_model_spec.js.hbs',
    }, {
      type:     'modify',
      path:     '{{rootDir}}/app/assets/styles/app.scss',
      pattern:  /([\s\S]*)/,
      template: '$1@import "app/assets/styles/controllers/{{fileName name}}.scss";\n',
    }, {
      type:     'modify',
      path:     '{{rootDir}}/config/routes.js',
      pattern:  /(TrackRouter\.configure\(\(\) => {)/,
      template: '$1\n{{{controllerRoute name}}}',
    }],
  });
};
