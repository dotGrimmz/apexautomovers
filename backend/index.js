const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const http = require('http');

const server = http.Server(app)


app.use(express.static('client'));

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})