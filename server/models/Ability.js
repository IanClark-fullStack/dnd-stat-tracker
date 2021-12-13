const mongoose = require('mongoose');

const { Schema } = mongoose;

const abilitySchema = new Schema({
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character', 
        // required: true
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
        type: String,
        default: '+1'
    },
    savingThrow: {
        type: String,
        default: '-4',
    },
    skills: {
        type: [Schema.Types.ObjectId],
        ref: 'Skill', 
        required: false
    }
});


const Ability = mongoose.model('Ability', abilitySchema);

module.exports = Ability;