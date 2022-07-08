import { gql } from '@apollo/client';
//apollo syntax. exporting to use in apollo


export const QUERY_ME_BASIC = gql`
  {
    me {
        username: String
        reviews: [Review]
        savedMovies: [Movie]
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;
