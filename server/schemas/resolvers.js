const { AuthenticationError } = require('apollo-server-express');
const { User, Character, Skill, Class, Stat, Ability } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        characters: async (parent, args) => {
            return args;
        },
        users: async (parent, args) => {
            return args;
        },
        abilities: async (parent, args) => {
            return args;
        },
        stats: async (parent, args) => {
            return args;
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