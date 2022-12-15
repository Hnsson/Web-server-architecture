const express = require('express');
const router = express.Router();

const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer();

const mongoose = require('./conn');

var portData = require('./port-model')

router.get('/', (req, res) => {
    
    portData.find({ hostname: req.headers.host }, (err, docs) => {
        if(err) {
            console.log("Could not find hostname in database...");
            res.send("Could not find hostname in database...");
        } else {
            proxy.web(req, res, {target: "http://192.168.1.106:" + docs[0].port});
        }
    })
})

module.exports = router;