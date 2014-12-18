var AppGroupsUserDefaults = function() {};

AppGroupsUserDefaults.prototype.save = function(options, success, fail) {
  cordova.exec(success ,fail , "AppGroupsUserDefaults", "save", [options]);
};

AppGroupsUserDefaults.prototype.load = function(options, success, fail) {
  cordova.exec(success(result), fail(), "AppGroupsUserDefaults", "load", [options]);
};

var appGroupsUserDefaults = new AppGroupsUserDefaults();
module.exports = appGroupsUserDefaults;
