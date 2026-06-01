const http= require('http');

const server=http.createServer();
server.on('request',(req,res)=>{
    res.end('Welcome');
});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});



// In the above code, we create an HTTP server using the `http` module. We listen for incoming requests using the `request` event and send a response with the message "Welcome". Finally, we start the server on port 3000 and log a message to the console when it's ready.