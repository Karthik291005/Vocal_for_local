const mongoose = require('mongoose');

const SellerModel = mongoose.model('Seller', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    craft: { type: String, required: true },
    experience: { type: String, required: true },
    locationType: { type: String, required: true },
    organization: { type: String, default: 'Anonymous' }
}));

module.exports = SellerModel;