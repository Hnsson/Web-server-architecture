const { fork } = require("child_process");

var portData = require('./port-model')

portData.find((err, docs) => {
    docs.forEach(proxy => {
        const server = fork("web-server.js", [proxy.hostname, proxy.port]);
    })
})
