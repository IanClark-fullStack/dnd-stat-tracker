const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
    ability: {
        type: Schema.Types.ObjectId,
        ref: 'Ability', 
        required: true
    },
    shortName: {
        type: String, 
        required: true
    },
    fullName: {
        type: String, 
    }, 
    scoreTotal: {
        type: Number
    }, 
    desc: {
        type: [String],
    },
    skills: {
        type: Schema.Types.ObjectId,
        ref: 'Skill', 
        required: true
    }
});


const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;