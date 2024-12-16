const names = require('./name.js');
const sayHi = require('./utils.js');
const data = require('./alternative-flavor.js');
require('./mind-generate.js');

console.log(names);

sayHi(names.peter);
sayHi('peter');