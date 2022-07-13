import React from "react";
import Auth from "../utils/auth";

// import review form
import ReviewForm from "../components/ReviewForm";

const NewReview = () => {

    const loggedIn = Auth.loggedIn();

    return(
        <main>
            <div>
                <ReviewForm />
            </div>
        </main>
    )
}

export default NewReview;