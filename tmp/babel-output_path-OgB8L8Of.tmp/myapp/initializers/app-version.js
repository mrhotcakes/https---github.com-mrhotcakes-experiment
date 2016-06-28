define('myapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'myapp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _myappConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_myappConfigEnvironment['default'].APP.name, _myappConfigEnvironment['default'].APP.version)
  };
});