import React from "react";
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

// import comment list and form
import CommentList from '../components/CommentList';
//import CommentForm from '../components/CommentForm';
import { useQuery } from "@apollo/client";
import { QUERY_REVIEW } from "../utils/queries";

const SingleReview = (props) => {
    const { id: reviewId } = useParams();

    const { loading, data } = useQuery(QUERY_REVIEW, {
        variables: { id: reviewId }
    })

    const review = data?.review || {};


    if (loading) {
        return <div>Getting movie review!</div>;
    }

    return (
        <div>
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
            </div>
            {review.commentCount > 0 && (
                <CommentList comments={review.comments} />
            )}
        </div>
    )
}

export default SingleReview;