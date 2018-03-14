//PORT config
//require('./config');

const express = require('express');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);

app.use(express.static(publicPath));

app.get('*', function (req, res) {
    res.sendFile(`${publicPath}/index.html`);
  });

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});