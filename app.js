const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(JSON.stringify(req))
    const accessToken = {
        "access_token": "access-token-1",
        "token_type": "bearer",
        "expires_in": 20,
        "scope": "read trust write"
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'applicaiton/json');
    res.end(accessToken);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});