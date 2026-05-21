const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/sample.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    
    readFile('./content/text.txt',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        console.log(first,second);
        writeFile('./content/result.txt',`Here is the result: ${first}, ${second}`, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});

console.log('starting the next one');
// The above code is an example of callback hell, where we have nested callbacks to handle asynchronous operations. This can lead to code that is difficult to read and maintain. To avoid this, we can use Promises or async/await to handle asynchronous operations in a more readable way.