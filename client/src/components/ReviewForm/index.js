import React, { useState } from 'react';

const ReviewForm = () => {

    const [formState, setFormState] = useState({ movieTitle: '', reviewTitle: '', reviewText: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        
    }

    return (
        <div>
            <form className='' onSubmit={handleFormSubmit}>
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
                    className=''
                    placeholder='Your Review'
                    name='reviewText'
                    id='reviewText'
                    value={formState.reviewText}
                    onChange={handleChange}
                />
                <button className='' type='submit'>
                    Create Review!
                </button>
            </form>
        </div>
    )
}

export default ReviewForm;