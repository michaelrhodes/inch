# inch

inch makes integers in urls less visually jarring. its charset was chosen to appear uniform and avoid conflicts with hex-encoded integers

[![build status](https://travis-ci.org/michaelrhodes/inch.svg?branch=master)](https://travis-ci.org/michaelrhodes/inch)

## install
```sh
npm install michaelrhodes/inch#2.0.0
```

## use
```js
var inch = require('inch')

var c = inch.encode(1337)
var i = inch.decode(c)

console.log(c, i)
-> 'orrs', 1337
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
