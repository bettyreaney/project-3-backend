const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneySchema = new Schema({
    balance: {
        type: String
    },
    income: {
        type: String
    },
    expense: {
        type: String
    },
    addAmount: {
        type: String
    },
}, { timestamps: true});

module.exports = mongoose.model('Money', moneySchema);
