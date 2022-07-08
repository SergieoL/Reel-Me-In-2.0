const { User, Review } = require('../models');

// error handling
const { AuthenticationError } = require('apollo-server-express');

// import signToken() function
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //need to add movies resolver? 
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
            const token = signToken(user);

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

        },
        // create a review
        addReview: async (parent, args, context) => {
            if (context.user) {
                const review = await Review.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                );

                return review;
            }

            throw new AuthenticationError('You must be logged in to create a review.')
        },
        // add a comment to a review
        addComment: async (parent, { reviewId, commentText }, context) => {
            if (context.user) {
                const updatedReview = await Review.findOneAndUpdate(
                    { _id: reviewId },
                    { $push: { comments: {commentText, username: context.user.username }}},
                    { new: true, runValidators: true }
                );

                return updatedReview;
            }

            throw new AuthenticationError('You must be logged in to leave a comment.')
        },
        // add movie to user's saved movies list
        saveMovie: async (parent, args, context) => {
            if (context.user) {
              return User.findByIdAndUpdate(
                { _id: context.user._id },
                {
                  $addToSet: {
                    savedMovies: args.input
                  }
                },
                {
                  new: true,
                  runValidators: true
                }
              );
            }
            throw new AuthenticationError('You must be logged in');
          },
          // remove movie from user's list
          removeMovie: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $pull: {
                            savedMovies: { movieId: movieId }
                        }
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You must be logged in to do that.')
          }
    }
};

module.exports = resolvers;