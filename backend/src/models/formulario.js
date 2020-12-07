const {Schema, model} = require('mongoose');
const formSchema = new Schema({
        name: String,
        lastName: String,
        phone: String,
        document: String

});

module.exports = model('Form', formSchema);