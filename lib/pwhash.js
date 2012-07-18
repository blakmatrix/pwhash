// lib/pwhash.js

var generateHash = module.exports = function generateHash(type, app, hash, pass, salt, cb) {
  var pwhash = '';
  app.log.info(type + ' info');
  app.log.info('----------------------------------------');
  app.log.info('pass = ' + pass.toString());
  if (salt === null || salt === '') {
    pwhash = hash(pass.toString());
    app.log.info('hash = ' + pwhash);
  } else {
    app.log.info('salt = ' + salt.toString());
    pwhash = hash(pass.toString(), salt.toString());
    app.log.info('hash = ' + pwhash);
  }
  cb(null, pwhash);
};