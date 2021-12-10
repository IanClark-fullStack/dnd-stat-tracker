const mongoose = require('mongoose');

const { Schema } = mongoose;

const abilitySchema = new Schema({
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character', 
        required: true
    },
    shortName: {
        type: String, 
        required: true
    },
    fullName: {
        type: String, 
    }, 
    desc: {
        type: [String],
    },
    scoreTotal: {
        type: Number,
        default: 10
    }, 
    modifier: {
        type: Number,
        default: 10
    },
    savingThrow: {
        type: Number,
        default: 10
    },
    skills: {
        type: Schema.Types.ObjectId,
        ref: 'Skill', 
        required: true
    }
});


const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;