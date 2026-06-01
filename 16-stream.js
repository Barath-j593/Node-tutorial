
const {createReadStream} = require('fs');

const stream=createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});

// default 64kb
// last buffer - remainder
// highWaterMark - control size

stream.on('data',(result)=>{
    console.log(result);
    console.log('---new chunk---');
});
stream.on('error',(err)=>{
    console.log(err);
});