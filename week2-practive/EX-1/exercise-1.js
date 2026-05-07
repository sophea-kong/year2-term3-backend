// server.js
const http = require('http');
const server = http.createServer((req, res) => {
 res.write('Hello, World!');
 return res.end();
});
server.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});

//q1 : when i access localhost:3000 the error i got is type error res.endd is not a funtion. this caused by line 5 syntax;
//q2 : res.write() send data to client without sending end signal. but res.end() send end signal to client.
// q3 : the client will keep loading and wait for the respond to end.
// q4 : because http is a class is js and to create new http object we need to call the create method.
// q5 : we can use try catch.

