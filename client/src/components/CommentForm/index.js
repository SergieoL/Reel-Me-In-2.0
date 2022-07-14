import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

const CommentForm = ({ reviewId }) => {

    const [commentText, setText] = useState('');

    const [addComment, { error }] = useMutation(ADD_COMMENT);
    
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setText('');

        try {
            await addComment({
                variables: {reviewId, commentText}
            })
            setText('');
        } catch (e) {
            console.error(e);
            console.log({reviewId, commentText})
            
        }
    }

    return (
        <div className="container mb-2">
            <form className="border border-info row" onSubmit={handleFormSubmit}>
                <div className="col-3"></div>
                <textarea
                    placeholder="Comment on this review"
                    value={commentText}
                    className="col-6 my-3"
                    onChange={handleChange}
                ></textarea>
                <div className="col-3"></div>
                <div className="col-4"></div>

                <button className="btn btn-success col-4 mb-2" type="submit">
                    Add Comment
                </button>
            </form>
        </div>
    )
};

export default CommentForm;