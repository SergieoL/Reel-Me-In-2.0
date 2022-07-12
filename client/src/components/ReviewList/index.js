import React from "react";

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
                {review.username}
                review on {review.createdAt}
                </p>
                <p className="">
                  Comments: {review.commentCount} || {' '}
                  {review.reactionCount ? 'view' : 'comment'}
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default ReviewList;