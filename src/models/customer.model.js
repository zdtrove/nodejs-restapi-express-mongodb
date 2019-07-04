let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restAPI', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection: ' + err) }
});

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);