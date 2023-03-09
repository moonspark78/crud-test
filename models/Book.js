const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: {
        /* Ici on fais le lien avec le model Author */
        type: mongoose.Types.ObjectId,
        ref:"Author"
    }
})

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;