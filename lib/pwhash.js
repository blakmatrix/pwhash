// lib/pwhash.js

var generateHash = module.exports = function generateHash(type, app, hash, pass, salt, cb) {
  app.log.info(type + ' info');
  app.log.info('----------------------------------------');
  app.log.info('pass = ' + pass.toString());
  if (salt === null || salt === '') {
    app.log.info('hash = ' + hash(pass.toString()));
  } else {
    app.log.info('salt = ' + salt.toString());
    app.log.info('hash = ' + hash(pass.toString(), salt.toString()));
  }
  cb(null);
};