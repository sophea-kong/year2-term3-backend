// server.js
const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        // Implement form submission handling
        let body = '';
        req.on("data",(chunk)=>{
            body+=chunk;
        });

        req.on("end",()=>{
            console.log(body);
            fs.appendFile('./EX-3/submission.txt',body+'\n',(err => {
                if(err){
                    console.log(err);
                } else {

                }
            }));
        });
        res.end("Success");
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});


/*
===================

    Discussion

===================
When handling POST request the data is send to the server in chunk so we listen for data, and we listen to end because it trigger when the data finish sending.
If we did not buffer the body correctly the data will be corrupt.

we use fs.appendFile becuase it write to the existing file unlike fs.writefile it create new file and write to it.
*/