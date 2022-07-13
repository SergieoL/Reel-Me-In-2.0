import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
  query reviewss($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      reviewTitle
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

export const QUERY_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      reviewTitle
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
`

export const QUERY_USER =gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedMovies {
        _id
        title
      }
      reviews {
        _id
        reviewText
        reviewTitle
        createdAt
        commentCount
      }
    }
  }
`

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      reviews {
        _id
        reviewTitle
        reviewText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentText
          username
        }
        savedMovies {
          _id
          title
        }
      }
    }
  }
`