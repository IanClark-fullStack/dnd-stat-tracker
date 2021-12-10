const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
    abilities: {
        type: Schema.Types.ObjectId,
        ref: 'Ability', 
        required: true
    },
    name: {
        type: [String], 
        required: true
    },
    hitDie: {
        type: Number, 
    }, 
    savingThrows: {
        type: Number
    },
});


const Class = mongoose.model('Class', classSchema);

module.exports = Class;