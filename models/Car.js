const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    img_url: { type: String },
    brand: { type: String },
    model: { type: String },
    regnr: { type: String },
    year: { type: String },
    roofrack: { type: String },
    gearbox: { type: String },
    seats: { type: String },
    price: { type: Number },
    from: { type: Date },
    to: { type: Date }
}, {
    collection: 'cars'
});

module.exports = mongoose.model('carmodel', carSchema);
