const http = require('http');
const server = http.createServer();

const port = 5000;

// run server by [node server.js] 
server.listen(port, () => {
    console.log(`you can access website by http://localhost:${port}`)
})