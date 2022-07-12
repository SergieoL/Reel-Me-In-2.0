const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const reviewSchema = new Schema(
    {
        reviewText: {
            type: String,
            require: 'You need to be logged in to write a review',
            maxlength: 300
        },
        reviewTitle: {
            type: String,
            maxlength: 25
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

reviewSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

const Review = model('Review', reviewSchema);

module.exports = Review;