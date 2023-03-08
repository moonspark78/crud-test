const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    author: {
        /* Ici on fais le lien avec le model Author */
        type:mongoose.Typed.ObjectId,
        ref:"Author"
    }
})

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;