import React from 'react';

// import components
import ReviewList from '../components/ReviewList';

import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../utils/queries';
//still need to write these components.
// import WatchList from '../components/WatchList';
// import ReviewForm from '../components/ReviewForm';
// import CommentForm from '../components/CommentForm';
// import CommentList from '../components/CommentList'

const Home = () => {
  
  // use these to query and update homepage in JSX
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
  console.log(reviews);

  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const loggedIn = Auth.loggedIn();

  return (
  
    //JSX for homepage goes here
    //use eventhandlers to change between comment/review forms 
    //use Auth to check if user is logged in and adjust JSX accordingly 
    <main>
      <div className="">
        <div className=''>
          {loading ? (
            <div>Getting Reviews!!</div>
          ) : (
            <ReviewList reviews={reviews} title="" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
