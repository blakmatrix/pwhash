#!/usr/bin/env node

var flatiron = require('flatiron'),
    path = require('path'),
    pwhash = flatiron.app;

pwhash.use(flatiron.plugins.cli, {
  source: path.join(__dirname, 'lib', 'commands'),
  usage: ['pwhash  - Generate password hashes from the command line.',
          '',
          'Usage:',
          'pwhash [md5, sha1, sha256, sha512, ripemd160] (<password> (<salt>))',
          '',
          'Note: Password and salt are optional, in the absense of a password, ',
          '      you will be prompted for password and salt, a return without ',
          '      entering anything for salt will generate a has without a salt.'
          ]
});

pwhash.start(function (err) {
  if (err) {
    pwhash.log.error(err.message || 'You didn\'t call any commands! Type pwhash use to see use cases');
    pwhash.log.warn('pwhash NOT OK.');
    return process.exit(1);
  }
  pwhash.log.info('pwhash ok'.green.bold);
});
