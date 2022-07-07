const { User, Review } = require('../models');

// error handling
const { AuthenticationError } = require('apollo-server-express');

// import signToken() function
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('reviews')
                    .populate('savedMovies');
        
                return userData;
            }
            throw new AuthenticationError('You are not logged in.');
        },     
        // query all reviews
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Review.find(params).sort({ creaedAt: -1 });
        },
        // query single review
        review: async (parent, { _id }) => {
            return Review.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('reviews')
                .populate('savedMovies');
        },
        // get single user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('reviews')
                .populate('savedMovies');
        },

    },

    Mutation: {

        // create user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const toke = signToken(user);

            return { token, user };
        },

        // login user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            // check if user exist by email
            if (!user) {
                throw new AuthenticationError('Email not found.')
            }

            const correctPw = await user.isCorrectPassword(password);

            // checks for correct password
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password.')
            }

            const token = signToken(user);
            return { token, user };

        }
    }
};

module.exports = resolvers;