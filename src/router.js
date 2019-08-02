const fs = require('fs');
const path = require('path');

//make router to communicate with server 
const router = (request, response) => {
    const endpoint = request.url;
    const method = request.method;
    if (endpoint === '/') {
        const filePath = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(filePath, (error, file) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.body('<h1> Page not found </h1>')
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(file);
            }

        })
    } else if (endpoint === '/public') {

    } else if (endpoint === '/create-post') {

    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1> Page not found </h1>')
    }

};

module.exports = router;