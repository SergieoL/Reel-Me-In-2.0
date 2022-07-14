import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../utils/mutations";

const ReviewForm = () => {

    const [formState, setFormState] = useState({ reviewText: '', reviewTitle: '', movieTitle: ''})
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
            console.log({...formState});
        }

    }

    return (
        <div className="row">
            <div></div>
        <div className="container col-3">
            <form className="form bg-warning border border-danger p-4 m-2 text-center row" onSubmit={handleFormSubmit}>
                <h5>Was it worth $10.50?</h5>
                <input
                    className='form-input my-3 col'
                    placeholder='Movie Title'
                    name='movieTitle'
                    type='text'
                    id='movieTitle'
                    value={formState.movieTitle}
                    onChange={handleChange}
                />
                <input
                    className='form-input my-3'
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
                    className="my-3 p-3 form-input large-input"
                    onChange={handleChange}
                ></textarea>
                <button className="btn btn-success" type="submit">
                    Post Review
                </button>
                {error && <p>Please check inputs and try again.</p>}
            </form>
            <div></div>
        </div>
        </div>
    )
}

export default ReviewForm;