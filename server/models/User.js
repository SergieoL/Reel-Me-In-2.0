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
            minlength: 6
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

// set up middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare ths password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;