var AppGroupsUserDefaults = function() {};

AppGroupsUserDefaults.prototype.save = function(options, success, fail) {
  cordova.exec(function() {
    success();
  }, function() {
    fail();
  }, "AppGroupsUserDefaults", "save", [options]);
};

AppGroupsUserDefaults.prototype.load = function(options, success, fail) {
  cordova.exec(function() {
    success();
  }, function() {
    fail();
  }, "AppGroupsUserDefaults", "load", [options]);
};

var imageResizer = new AppGroupsUserDefaults();
module.exports = imageResizer;
