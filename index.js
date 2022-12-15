const express  = require('express');
const app = express();
const router = require('./reverse-proxy');
const PORT = process.env.PORT || 80;

const url = require('url');

const reverse_proxy = require('http').createServer(app).listen(PORT, () => { console.log("Web server listening on port: " +  PORT) });

var server_controller = require('./server-controller');

app.get('/', router)