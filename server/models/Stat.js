const mongoose = require('mongoose');

const { Schema } = mongoose;

const statSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Character', 
        // required: true
    },
    initiative: {
        type: Number,
    }, 
    HP: {
        type: Number,
    }, 
    speed: {
        type: Number,
    }, 
    hitDice: {
        type: Number,
    }, 
    armor: {
        type: Number,
    }, 
    proficiency: {
        type: Number,
    }, 
    // abilityScores: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Ability', 
    //     required: true
    // }
});


const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;