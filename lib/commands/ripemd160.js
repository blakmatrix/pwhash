// commands/ripemd160.js
var hash         = require('node_hash').ripemd160,
    generateHash = require('../pwhash.js');

var ripemd160 = module.exports = function ripemd160(pass, salt, cb) {
  if (typeof cb !== 'function') {
    var callback = Array.prototype.slice.call(arguments).pop();
    callback({name: 'Invalid Command', message: "Invalid command. Please Type `pwhash usage` for usage information."});
  }
  var app  = this,
      type = 'RIPEMD160';
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