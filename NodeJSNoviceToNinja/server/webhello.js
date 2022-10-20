#!/usr/bin/env node

const
    port = (process.argv[2] || process.env.PORT || 3003),
    http = require('http');

http.createServer((req, res) => {
    console.log(req.url);

    const nameArg = capitalize( req.url.replace(/[^\w.,-]/g, ' ').replace(/\s+/g, ' ').trim() || 'world' );
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>Hello ${nameArg}!</p>`);

}).listen(port);

console.log(`Server running at http://localhost:${ port }/`);



function capitalize (str){
    return str
        .split(' ')
        .map( str => str.replace(str[0], str[0].toUpperCase()))
        .join(' ')
}