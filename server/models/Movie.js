const { Schema } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
});

module.exports = movieSchema;