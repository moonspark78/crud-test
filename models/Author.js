const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    }
})
const Author = mongoose.model('Author',AuthorSchema);
module.exports = Author;