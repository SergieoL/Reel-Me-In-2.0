import React from "react";
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

// import comment list and form
import CommentList from '../components/CommentList';
//import CommentForm from '../components/CommentForm';
import { useQuery } from "@apollo/client";
import { QUERY_REVIEW } from "../utils/queries";
import CommentForm from "../components/CommentForm";
import Auth from '../utils/auth';

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
        <div className="bg-warning">
            <div className="card border border-info bg-warning mx-2 p-2">
                <h4 className="text-center">{review.reviewTitle}</h4>
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
            {Auth.loggedIn() && <CommentForm reviewId={review._id} />}
        </div>
    )
}

export default SingleReview;