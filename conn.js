const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Web-server'
}).then(() => {
    console.log("Connected to the database...");
})

const db = mongoose.connection;
module.exports = mongoose;