# pwhash

A tiny utility to generate password hashes from the command line.

## Usage:

`pwhash [md5, sha1, sha256, sha512, ripemd160] (<password> (<salt>))`

## Example:

```shell
~ pwhash md5 mypassword somesalt
info:    MD5 info
info:    ----------------------------------------
info:    pass = mypassword
info:    salt = somesalt
info:    hash = fa119398e75452a9a0ef14e63c7fb753
info:    pwhash ok

```

## Install:

    npm install pwhash

## License:

MIT/X11.