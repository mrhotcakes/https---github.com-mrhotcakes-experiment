define('myapp/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'myapp/tests/helpers/start-app', 'myapp/tests/helpers/destroy-app'], function (exports, _qunit, _myappTestsHelpersStartApp, _myappTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _myappTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _myappTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});