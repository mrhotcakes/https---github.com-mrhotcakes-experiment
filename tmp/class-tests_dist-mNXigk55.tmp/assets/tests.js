define('myapp/tests/acceptance/index-test', ['exports', 'qunit', 'myapp/tests/helpers/module-for-acceptance'], function (exports, _qunit, _myappTestsHelpersModuleForAcceptance) {

  (0, _myappTestsHelpersModuleForAcceptance['default'])('Acceptance | index');

  (0, _qunit.test)('visiting /', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/');
    });
  });

  (0, _qunit.test)('should list available rentals.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(this.$('.listing').length, 3, "should see 3 listings");
    });
  });

  (0, _qunit.test)('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', "should navigate to about");
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', "should navigate to contact");
    });
  });

  (0, _qunit.test)('should filter the list of rentals by city.', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(this.$('.listing').length, 1, "should show 1 listing");
      assert.equal(this.$(".listing .location:contains('Seattle')").length, 1, "should contain 1 listing with location Seattle");
    });
  });
});
define('myapp/tests/acceptance/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/index-test.js should pass jshint.');
  });
});
define('myapp/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('myapp/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('myapp/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
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
define('myapp/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('myapp/tests/helpers/resolver', ['exports', 'myapp/resolver', 'myapp/config/environment'], function (exports, _myappResolver, _myappConfigEnvironment) {

  var resolver = _myappResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _myappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myappConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('myapp/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('myapp/tests/helpers/start-app', ['exports', 'ember', 'myapp/app', 'myapp/config/environment'], function (exports, _ember, _myappApp, _myappConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _myappConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _myappApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('myapp/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('myapp/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('myapp/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('myapp/tests/test-helper', ['exports', 'myapp/tests/helpers/resolver', 'ember-qunit'], function (exports, _myappTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_myappTestsHelpersResolver['default']);
});
define('myapp/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('myapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map