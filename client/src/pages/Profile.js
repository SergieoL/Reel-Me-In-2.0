// import params to get user id
import { useParams } from "react-router-dom";

// import ReviewList component to list user reviews
import ReviewList from "../components/ReviewList";

// import queries
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam }
    });
  
    const user = data?.user || data?.user || {};
  
    if (loading) {
      return <div>Getting Profile!</div>;
    }
  
    return (
      <div className="card">
        <div className="text-center">
          <h2 className="">
            {user.username}
          </h2>
        </div>
  
        <div className="">
          <div className="">
            <ReviewList reviews={user.reviews} title={`${user.username}'s reviews`} />
          </div>
        </div>
      </div>
    );
  };

export default Profile;