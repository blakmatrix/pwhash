// commands/invisible.js


var md5 = module.exports = function invisible(cb) {
  if (typeof cb !== 'function') {
    var callback = Array.prototype.slice.call(arguments).pop();
    callback({name: 'Invalid Command', message: "Invalid command. Please Type `pwhash usage` for usage information."});
  }
  var app  = this;
  app.prompt.get([{
    name: 'password',
    hidden: true,
    conform: function (value) {
      return true;
    }
  }], function (err, result) {
    app.log.info('The password you entered between quotes is: \'' + result.password + '\'');
  });
};

