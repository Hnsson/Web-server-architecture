var mongoose = require('./conn');
var Schema = mongoose.Schema;

var portDataSchema = new Schema({
    hostname: String,
    port: Number
}, { collection: 'port' });


module.exports = mongoose.model('portData', portDataSchema);