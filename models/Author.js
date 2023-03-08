const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema ({
    name:{
        type: 'string',
        required: true,
    },
    surname:{
        type: 'string',
        required: true,
    },
    age:{
        type: 'number',
        required: true,
    },
    
})