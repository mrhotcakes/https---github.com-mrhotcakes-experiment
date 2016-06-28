define('myapp/router', ['exports', 'ember', 'myapp/config/environment'], function (exports, _ember, _myappConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _myappConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});