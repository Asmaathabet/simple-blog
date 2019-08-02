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
    } else if (endpoint.includes('/public')) {

        const path1 = endpoint.split('/');
        const filePath = path.join(__dirname, '..', ...path1);
        const extention = endpoint.split('.').pop();
        const extType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            jpg: 'image/jpg',
            png: 'image/png',
            ico: 'image/x-icon',
        };
        fs.readFile(filePath, (error, file) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end('<h1>Not Found</h1>');
            } else {
                response.writeHead(200, { 'Content-Type': extType[extention] });
                response.end(file);
            }
        });
    } else if (endpoint === '/create-post') {

    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1> Page not found </h1>')
    }

};

module.exports = router;