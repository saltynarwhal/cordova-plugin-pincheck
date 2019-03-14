var exec = require('cordova/exec');

function PinCheck() {}

PinCheck.prototype.isPinSetup = function(success, error) {
    exec(success, error, "PinCheck", "isPinSetup", ["arg0"]);
};

// Installation constructor that binds ToastyPlugin to window
PinCheck.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.PinCheck = new PinCheck();
  return window.plugins.PinCheck;
};
cordova.addConstructor(PinCheck.install);
