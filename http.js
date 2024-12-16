const http = require('http');

const server = http.createServer((request, respond) => {
    if (request.url === '/') {
        respond.end('Welcome 2 our home page');
    } else if (request.url === '/about') {
        respond.end('Here is our short history');
    } else {
        respond.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
});

server.listen(5000);