define('myapp/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'myapp/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _myappConfigEnvironment) {

  var name = _myappConfigEnvironment['default'].APP.name;
  var version = _myappConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});