// commands/md5.js
var hash         = require('node_hash').md5,
    generateHash = require('../pwhash.js');

var md5 = module.exports = function md5(pass, salt, cb) {
  if (typeof cb !== 'function') {
    var callback = Array.prototype.slice.call(arguments).pop();
    callback({name: 'Invalid Command', message: "Invalid command. Please Type `pwhash usage` for usage information."});
  }
  var app  = this,
      type = 'MD5';
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

