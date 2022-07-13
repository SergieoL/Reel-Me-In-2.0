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
        <div>
            <form className="" onSubmit={handleFormSubmit}>
                <textarea
                    placeholder="Comment on this review"
                    value={commentText}
                    className=""
                    onChange={handleChange}
                ></textarea>

                <button className="" type="submit">
                    Add Comment
                </button>
            </form>
        </div>
    )
};

export default CommentForm;