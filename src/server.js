const http = require('http');
const router = require('./router');


const server = http.createServer(router);

const port = process.env.port || 5000;
// run server by [node server.js] 
server.listen(port, () => {
    console.log(`you can access website by http://localhost:${port}`)
})