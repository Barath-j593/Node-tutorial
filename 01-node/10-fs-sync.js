const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');
console.log('start');
const first=readFileSync('./content/sample.txt','utf-8');
const second=readFileSync('./content/text.txt','utf-8');
console.log(first,second);
writeFileSync('./content/result.txt',`Here is the result: ${first}, ${second}`,{flag:'a'}); //flag:'a' is used to append the data to the file instead of overwriting it.
console.log('done with this task');
console.log('starting the next one');