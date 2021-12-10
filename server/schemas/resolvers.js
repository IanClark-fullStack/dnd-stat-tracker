const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        characters: async (parent, args) => {
            return args;
        },
        users: async (parent, args) => {
            return args;
        }
    }, 
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
    
            if (!user) {
            throw new AuthenticationError('Incorrect credentials');
            }
    
            // const correctPw = await user.isCorrectPassword(password);
    
            // if (!correctPw) {
            // throw new AuthenticationError('Incorrect credentials');
            // }
    
            const token = signToken(user);
    
            return { token, user };
        }
    }
}




module.exports = resolvers;