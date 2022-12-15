const express  = require('express');
const app = express();

const fs = require('fs');

const hostname = process.argv[2]
const port = process.argv[3]
var dir = './web-servers/' + hostname + "-" + port

// This is a child process that should all create a router folder and then we as developers can edit router to be more specific for the client
if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);

    content = "const express = require('express');\nconst router = express.Router();\n\n\n\nmodule.exports = router;"

    fs.writeFile(dir + '/router.js', content, (err) => {
        if (err) console.log(err);

        const router = require(dir + '/router.js');
        const http = require('http').createServer(app).listen(port)
        app.get('/', router)
    });
} else {
    const router = require(dir + '/router.js');
    const http = require('http').createServer(app).listen(port)
    app.get('/', router)
}



