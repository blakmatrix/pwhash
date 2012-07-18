// commands/sha1.js
var hash         = require('node_hash').sha1,
    generateHash = require('../pwhash.js');

var sha1 = module.exports = function sha1(pass, salt, cb) {
  if (typeof cb !== 'function') {
    var callback = Array.prototype.slice.call(arguments).pop();
    callback({name: 'Invalid Command', message: "Invalid command. Please Type `pwhash usage` for usage information."});
  }
  var app  = this,
      type = 'SHA1';
  if (pass === null) {
    app.prompt.get(['pass', 'salt'], function (err, result) {
      pass = result.pass;
      salt = result.salt;
      generateHash(type, app, hash, pass, salt, cb);
    });
  } else {
    generateHash(type, app, hash, pass, salt, cb);
  }
};