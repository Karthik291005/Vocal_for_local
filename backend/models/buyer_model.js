const mongoose = require('mongoose');

const BuyerModel = mongoose.model('Buyer', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true }
}));

module.exports = BuyerModel;