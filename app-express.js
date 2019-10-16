const express = require('express')
const app = express();
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    const accessToken = {
        "access_token": "access-token-1",
        "token_type": "bearer",
        "expires_in": 20,
        "scope": "read trust write"
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(accessToken);
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);