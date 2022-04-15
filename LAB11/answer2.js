const http = require("http");
const fs = require("fs");
//const path = require('path');
const server = http.createServer();
server.on('request', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const src = fs.createReadStream("./picture.jpg");
        src.pipe(res);
});
server.listen(8000);

//----------------------------

const fs = require('fs');
const server = require('http').createServer();
server.on('request', (request, response) => {
        fs.readFile('./tiles.jpg', (err, data) => {
                if (err) throw err;
                response.end(data);
        });
});
server.listen(8000);


require('http').createServer((req, res) => {
        const img = require('fs').createReadStream('./tiles.jpg');
        img.pipe(res);
}).listen(9090, () => console.log("listening to 9090"));
