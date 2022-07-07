const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import movie schema
const movieSchema = require('./Movie');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must use a valid email address.']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ],
        savedMovies: [movieSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare new password with hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;