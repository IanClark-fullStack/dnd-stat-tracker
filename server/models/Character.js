const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    characters: [Character.schema]
});


const User = mongoose.model('User', userSchema);

module.exports = Character;