//import statements
import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WATCHLIST, QUERY_ME_BASIC } from '../utils/queries';
import WatchList from '../components/WatchList';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList'


const Home = () => {
    //use these to query and update homepage in JSX
 const { loading, data } = useQuery(QUERY_WATCHLIST);
 const { data: userData } = useQuery(QUERY_ME_BASIC);
 const loggedIn = Auth.loggedIn();

    return (
        //JSX goes for homepage goes here
        //use eventhandlers to change between comment/review forms 
        //use Auth to check if user is logged in and adjust JSX accordingly 
        <></>
    )
};