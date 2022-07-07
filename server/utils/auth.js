// import jwt for user authentication
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

// set token to expire after 1 houre
const expiration = '1h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}