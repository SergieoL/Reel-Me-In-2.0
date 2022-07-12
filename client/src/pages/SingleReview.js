import React from "react";
import { useParams } from "react-router-dom";

// import comment list and form
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { QUERY_REVIEWS } from "../utils/queries";

const SingleReview = (props) => {
    const { id: reviewId } = useParams();

    const { loading, data } = useQuery(QUERY_REVIEWS)
}