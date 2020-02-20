const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchame = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const ItemModel = mongoose.model('item', ItemSchame);
module.exports = ItemModel;