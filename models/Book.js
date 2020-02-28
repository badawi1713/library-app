const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    imageURL: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: 'Available'
    },
    date: {
        type: String
    }

});

module.exports = mongoose.model("Book", booksSchema);