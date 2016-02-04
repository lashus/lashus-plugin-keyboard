
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var LashusKeyboard = function() {
};

LashusKeyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "LashusKeyboard", "hideKeyboardAccessoryBar", [hide]);
};

LashusKeyboard.close = function() {
    exec(null, null, "LashusKeyboard", "close", []);
};

LashusKeyboard.show = function() {
    exec(null, null, "LashusKeyboard", "show", []);
};

LashusKeyboard.showForced = function() {
    exec(null, null, "LashusKeyboard", "showForced", []);
};

LashusKeyboard.disableScroll = function(disable) {
    exec(null, null, "LashusKeyboard", "disableScroll", [disable]);
};

/*
Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

Keyboard.isVisible = false;

channel.onCordovaReady.subscribe(function() {
    exec(success, null, 'LashusKeyboard', 'init', []);

    function success(msg) {
        var action = msg.charAt(0);
        if ( action === 'S' ) {
            var keyboardHeight = msg.substr(1);
            cordova.plugins.LashusKeyboard.isVisible = true;
            cordova.fireWindowEvent('native.keyboardshow', { 'keyboardHeight': + keyboardHeight });

            //deprecated
            cordova.fireWindowEvent('native.showkeyboard', { 'keyboardHeight': + keyboardHeight });
        } else if ( action === 'FS' ) {
            var keyboardHeight = msg.substr(1);
            cordova.plugins.LashusKeyboard.isVisible = true;
            cordova.fireWindowEvent('native.keyboardshow', { 'keyboardHeight': + keyboardHeight });

            //deprecated
            cordova.fireWindowEvent('native.showkeyboard', { 'keyboardHeight': + keyboardHeight });
        } else if ( action === 'H' ) {
            cordova.plugins.LashusKeyboard.isVisible = false;
            cordova.fireWindowEvent('native.keyboardhide');

            //deprecated
            cordova.fireWindowEvent('native.hidekeyboard');
        }
    }
});

module.exports = LashusKeyboard;



