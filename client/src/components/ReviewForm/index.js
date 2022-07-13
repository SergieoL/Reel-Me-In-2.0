import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../utils/mutations";

const ReviewForm = () => {

    const [formState, setFormState] = useState({ movieTitle: '', reviewTitle: '', reviewText: ''})
    const [addReview, { error }] = useMutation(ADD_REVIEW);

    const handleChange = event => {

        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        
        try {
            await addReview({
                variables: { ...formState }
            })
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div>
            <form className="" onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Movie Title'
                    name='movieTitle'
                    type='text'
                    id='movieTitle'
                    value={formState.movieTitle}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='Review Title'
                    name='reviewTitle'
                    type='text'
                    id='reviewTitle'
                    value={formState.reviewTitle}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Write an awesome review."
                    name="reviewText"
                    value={formState.reviewText}
                    className=""
                    onChange={handleChange}
                ></textarea>
                <button className="btn" type="submit">
                    Post Review
                </button>
                {error && <p>Please check inputs and try again.</p>}
            </form>
        </div>
    )
}

export default ReviewForm;