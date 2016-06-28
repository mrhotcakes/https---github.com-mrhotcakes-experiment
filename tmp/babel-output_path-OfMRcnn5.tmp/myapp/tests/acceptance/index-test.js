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