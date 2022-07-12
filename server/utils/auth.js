// import jwt for user authentication
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

// set token to expire after 1 houre
const expiration = '1h';

module.exports = {
    authMiddleware: function({ req }) {
        // allows token to be sent throufh req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
      
        // separate bearer from token value
        if (req.headers.authorization) {
          token = token
            .split(' ')
            .pop()
            .trim();
        }
      
        // if theres no token return request object as is
        if (!token) {
          return req;
        }
      
        try {
          // decode and attach user data to request object
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');
        }
      
        // return request object
        return req;
      },

    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}