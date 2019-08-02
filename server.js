const http = require('http');

//make router to communicate with server 
const router = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('The router is connected successfully with server ');
    response.end();
}

const server = http.createServer(router);

const port = 5000;
// run server by [node server.js] 
server.listen(port, () => {
    console.log(`you can access website by http://localhost:${port}`)
})