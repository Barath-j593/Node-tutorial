const http = require('http');
const server = http.createServer((req,res)=>{
    //res.write('Welcome to our home page');
    //console.log(req);
    console.log(req.url);
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, World!');
    }
        else if(req.url === '/about'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('This is the about page');
        }
        else{
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/home">Back Home</a>
    `);
        }
});
server.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
});