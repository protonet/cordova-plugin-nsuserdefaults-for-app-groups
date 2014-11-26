var AppGroupsUserDefaults = function() {};

AppGroupsUserDefaults.prototype.save = function(options, success, fail) {
  cordova.exec(function() {
    success();
  }, function() {
    fail();
  }, "AppGroupsUserDefaults", "resize", [options]);
};

var imageResizer = new AppGroupsUserDefaults();
module.exports = imageResizer;
