// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    switch(true){
        case (url === '/' && method === 'GET') :
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>Welcome to the Home Page</h1>
                        <p>This is a simple Node.js server.</p>
                    </body>
                </html>
            `);
        case (method === 'GET' && url==='/contact-us'):
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.end("<p>You can reach us vai email…</p>")
        case (method === 'GET' && url==='/products'):
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.end("<p>Buy one get one…</p>")
        case (method === 'GET' && url==='/projects'):
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.end("<p>Here are our awesome projects</p>")
        case (method === 'GET' && url==='/about'):
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.end("<p>About us: at CADT, we love node.js!</p>")
        // Implement more routes here
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});


/* 
=====================================

            REFLECTION

=====================================
if user visit page that does not exist on the three case then we return 404 page not found to them in the default case;

we check both url and method because we want to ensure that user is making a GET request for that page.

content-type when returning html is 'text/html'.

as the routes grow there will be more case and combine with difference method it will grow really fast. fixing it will be hard since the if/else or switch statement has a lot of case with small different.

framework will offer default type for us and also provide declarative syntax for easier use.
*/

