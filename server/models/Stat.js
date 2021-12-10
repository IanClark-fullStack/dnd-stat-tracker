const mongoose = require('mongoose');

const { Schema } = mongoose;

const statSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Character', 
        required: true
    },
    name: {
        type: [String], 
        required: true
    },
    currentValue: {
        type: [Number], 
        default: 2
    }, 
    currentHitDice: {
        type: String,
        default: '1d8'
    },
    
    // abilityScores: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Ability', 
    //     required: true
    // }
});


const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;