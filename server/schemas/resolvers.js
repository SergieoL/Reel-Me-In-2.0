const { User, Review } = require('../models');

const resolvers = {
    Query: {
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
            }
    }
};

module.exports = resolvers;