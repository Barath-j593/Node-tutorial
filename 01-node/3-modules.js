//CommonJS, every file is module (by default)
//Modules -- Encapsulated code (only share minimum)

const { name1,name2,name3 } = require("./names");
const sayhi = require("./4-util");
const data=require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(data);
sayhi(name1);
sayhi(name2);
sayhi(name3);
