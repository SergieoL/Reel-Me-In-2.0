import React from "react";
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, title }) => {
    if (!reviews.length) {
      return <h3>No Reviews Posted</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {reviews &&
          reviews.map(review => (
            <div key={review._id} className="">
              <div className="">
                <h4>{review.reviewTitle}</h4>
                <p>{review.reviewText}</p>
                <p className="">
                <Link
                  to={`/profile{${review.username}}`}
                  >
                    {review.username} 
                </Link>
                reviewed on {review.createdAt}
                </p>
                <p className="">
                  <Link to={`/review/${review._id}`}>
                  Comments: {review.commentCount} || {' '}
                  {review.reactionCount ? 'view' : 'comment'}                    
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default ReviewList;