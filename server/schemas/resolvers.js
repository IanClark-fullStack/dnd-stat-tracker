const { AuthenticationError } = require('apollo-server-express');
const { User, Character, Skill, Class, Stat, Ability } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        characters: async (parent, args) => {
            return Character.find().populate('characterStats').populate('abilityScores').populate('class').populate('skills');
        },
        users: async (parent, args) => {
            return User.find().populate('characters');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('characters');
            // if (context.user) {
            //     const user = await User.findById({ _id: context.user._id}).populate('characters');
            //     return user;
            // }
            
            
            return args;
        },
        abilities: async (parent, args) => {
            return Ability.find();
        },
        stats: async (parent, args) => {
            return Stat.find();
        }

    }, 
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
    
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
    
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
    
            const token = signToken(user);
    
            return { token, user };
        }
    }
}




module.exports = resolvers;