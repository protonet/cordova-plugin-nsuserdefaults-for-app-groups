var AppGroupsUserDefaults = function() {};

AppGroupsUserDefaults.prototype.save = function(options, success, fail) {
  cordova.exec(function() {
    success();
  }, function() {
    fail();
  }, "AppGroupsUserDefaults", "save", [options]);
};

AppGroupsUserDefaults.prototype.load = function(options, success, fail) {
  cordova.exec(function(result) {
    success(result);
  }, function() {
    fail();
  }, "AppGroupsUserDefaults", "load", [options]);
};

var appGroupsUserDefaults = new AppGroupsUserDefaults();
module.exports = appGroupsUserDefaults;
