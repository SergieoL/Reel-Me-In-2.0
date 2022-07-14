const { Schema } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = movieSchema;