const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String },
    surname: { type: String },
    address: { type: String },
    zip: { type: String },
    city: { type: String },
    email: { type: String },
    password: { type: String }
}, { collection: 'customers' });

module.exports = mongoose.model('customermodel', customerSchema);