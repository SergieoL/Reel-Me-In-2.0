const { User, Review } = require('../models');

const resolvers = {
    Query: {
        reviews: async () => {
            return Review.find().sort({ createdAt: -1});
        }
    }
};

module.exports = resolvers;