// import the gql template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

    type Review {
        _id: ID
        reviewText: String
        reviewTitle: String
        movieTitle: String
        createdAt: String
        username: String
        commentCount: Int
        comments : [Comment]
    }

    type Movie {
        _id: ID
        title: String
    }

    input MovieInput {
        title: String
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
        me: User
        users: [User]
        user(username: String!): User
        reviews(username: String): [Review]
        review(_id: ID!): Review
    }

    type Mutation {
        login(email: String, password: String!): Auth

        addUser(username: String!, email: String!, password: String!): Auth
        addReview(reviewText: String!, reviewTitle: String!, movieTitle: String!): Review
        addComment(reviewId: ID!, commentText: String!): Review

        saveMovie(input: MovieInput): User
        
        removeMovie(bookId: String!): User

    }

    type Auth {
        token: ID!
        user: User
    }

`;

// export typeDefs
module.exports = typeDefs;