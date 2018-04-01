/**
 * Define component generator.
 * @param {Plop} plop Plop object.
 */
module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts:     [{
      type:    'input',
      name:    'name',
      message: 'Input component name',
    }],
    actions: [{
      type:         'add',
      path:         '{{rootDir}}/app/components/{{fileName name}}_component.js',
      templateFile: '{{templateDir}}/components/component.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/view_models/components/{{fileName name}}.js',
      templateFile: '{{templateDir}}/components/view_model.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/views/components/{{fileName name}}.js',
      templateFile: '{{templateDir}}/components/view.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/app/assets/styles/components/{{fileName name}}.scss',
      templateFile: '{{templateDir}}/components/style.scss.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/tests/components/{{fileName name}}_component_spec.js',
      templateFile: '{{templateDir}}/components/component_spec.js.hbs',
    }, {
      type:         'add',
      path:         '{{rootDir}}/tests/view_models/components/{{fileName name}}_spec.js',
      templateFile: '{{templateDir}}/components/view_model_spec.js.hbs',
    }, {
      type:     'modify',
      path:     '{{rootDir}}/app/assets/styles/app.scss',
      pattern:  /([\s\S]*)/,
      template: '$1@import "app/assets/styles/components/{{fileName name}}.scss";\n',
    }],
  });
};
