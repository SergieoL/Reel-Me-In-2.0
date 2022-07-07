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
        comments : [Comment]
    }

    type Movie {
        _id: ID
        title: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        reviews: [Review]
        savedMovies: [Movie]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        reviews(username: String): [Review]
        review(_id: ID!): Review
    }

    type Mutation {
        login(email: String!, password: String!) : User
        
        addUser(username: String!, email: String!, password: String!) : User
    }

`;

// export typeDefs
module.exports = typeDefs;