var test      = require("tap").test,
    md5       = require('../lib/commands/md5'),
    sha1      = require('../lib/commands/sha1'),
    sha256    = require('../lib/commands/sha256'),
    sha512    = require('../lib/commands/sha512'),
    ripemd160 = require('../lib/commands/ripemd160'),
    flatiron  = require('flatiron'),
    app       = flatiron.app,
    password  = 'password',
    salt      = 'salt';

app.init();
app.log.loggers.default.remove(app.log.loggers.default.transports.console); // make this baby silent

test('MD5', function (t) {
  t.test('password only', function (t) {
    t.plan(1);
    md5.apply(app, [password, null, function (err, result) {
      t.type(result, "string", "type is string");
    }]);
    t.end();
  });
  t.test('password only', function (t) {
    t.plan(1);
    md5.apply(app, [password, null, function (err, result) {
      t.equal(result, "5f4dcc3b5aa765d61d8327deb882cf99", "password only hashes match");
    }]);
    t.end();
  });
  t.test('password and salt', function (t) {
    t.plan(1);
    md5.apply(app, [password, salt, function (err, result) {
      t.equal(result, "961ff2373921d4eadfe97e4ccc56d3e2", "password and salt hashes match");
    }]);
    t.end();
  });
  t.end();
});

test('SHA1', function (t) {
  t.test('password only', function (t) {
    t.plan(1);
    sha1.apply(app, [password, null, function (err, result) {
      t.type(result, "string", "type is string");
    }]);
    t.end();
  });
  t.test('password only', function (t) {
    t.plan(1);
    sha1.apply(app, [password, null, function (err, result) {
      t.equal(result, "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8", "password only hashes match");
    }]);
    t.end();
  });
  t.test('password and salt', function (t) {
    t.plan(1);
    sha1.apply(app, [password, salt, function (err, result) {
      t.equal(result, "c1d0e06998305903ac76f589bbd6d4b61a670ba6", "password and salt hashes match");
    }]);
    t.end();
  });
  t.end();
});

test('SHA256', function (t) {
  t.test('password only', function (t) {
    t.plan(1);
    sha256.apply(app, [password, null, function (err, result) {
      t.type(result, "string", "type is string");
    }]);
    t.end();
  });
  t.test('password only', function (t) {
    t.plan(1);
    sha256.apply(app, [password, null, function (err, result) {
      t.equal(result, "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", "password only hashes match");
    }]);
    t.end();
  });
  t.test('password and salt', function (t) {
    t.plan(1);
    sha256.apply(app, [password, salt, function (err, result) {
      t.equal(result, "84ec44c7d6fc41917953a1dafca3c7d7856f7a9d0328b991b76f0d36be1224b9", "password and salt hashes match");
    }]);
    t.end();
  });
  t.end();
});

test('sha512', function (t) {
  t.test('password only', function (t) {
    t.plan(1);
    sha512.apply(app, [password, null, function (err, result) {
      t.type(result, "string", "type is string");
    }]);
    t.end();
  });
  t.test('password only', function (t) {
    t.plan(1);
    sha512.apply(app, [password, null, function (err, result) {
      t.equal(result, "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86", "password only hashes match");
    }]);
    t.end();
  });
  t.test('password and salt', function (t) {
    t.plan(1);
    sha512.apply(app, [password, salt, function (err, result) {
      t.equal(result, "1c8e432462648d825ade4983da4b1c9cc231180d3dd0e77b0cfe0b28c5e2f2b39aa3adabfcd5e1fe968b9e815005cf67499c30177f4c0199e39064ceaa5adefa", "password and salt hashes match");
    }]);
    t.end();
  });
  t.end();
});

test('RIPEMD160', function (t) {
  t.test('password only', function (t) {
    t.plan(1);
    ripemd160.apply(app, [password, null, function (err, result) {
      t.type(result, "string", "type is string");
    }]);
    t.end();
  });
  t.test('password only', function (t) {
    t.plan(1);
    ripemd160.apply(app, [password, null, function (err, result) {
      t.equal(result, "2c08e8f5884750a7b99f6f2f342fc638db25ff31", "password only hashes match");
    }]);
    t.end();
  });
  t.test('password and salt', function (t) {
    t.plan(1);
    ripemd160.apply(app, [password, salt, function (err, result) {
      t.equal(result, "366c72eda9960ac928910be069ff6414a3a86f94", "password and salt hashes match");
    }]);
    t.end();
  });
  t.end();
});