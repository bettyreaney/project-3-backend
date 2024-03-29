const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneySchema = new Schema({
    category: {
        type: String
    },
    addAmount: {
        type: String
    },
    title: {
        type: String,
    },
    income: {
        type: String,
    },
    expense: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Money', moneySchema);
