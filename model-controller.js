const prompt = require('prompt-sync')({ sigint: true })

var portData = require('./port-model')

var running = 'y';
while (running == 'y') {
    const hostname = prompt("Hostname: ");
    const port = prompt("Port: ");

    var item = {
        hostname: hostname,
        port: port
    };
    var data = new portData(item);
    data.save();

    running = prompt("Add more?(y/n): ");
}

process.exit()