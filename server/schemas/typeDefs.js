// import the gql template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

    type Review {
        _id: ID
        reviewText: String
        createdAt: String
        username: String
        commentCount: Int
    }

    type Query {
        reviews: [Review]
    }
`;

// export typeDefs
module.exports = typeDefs;