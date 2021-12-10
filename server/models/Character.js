const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    startingClass: {
        type: String, 
    }, 
    level: {
        type: Number,
        default: 1
    },
    characterStats: {
        type: Schema.Types.ObjectId,
        ref: 'Stat',
        required: true
    },
    abilityScores: {
        type: Schema.Types.ObjectId,
        ref: 'Ability', 
        required: true
    }
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class', 
        required: true
    }
});


const Character = mongoose.model('Character', characterSchema);

module.exports = Character;