import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
  query reviewss($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;
