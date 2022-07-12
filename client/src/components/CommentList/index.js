import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments }) => {
    return (
        <div className="">
            <div className="">
                <span className="">Comments</span>
            </div>
            <div className="">
                {comments &&
                    comments.map(comments => (
                        <p className="" key={comment._id}>
                            {comment.commentText} //{' '}
                            <Link to={`profile/${comment.username}`}>
                                {comment.username} {comment.createdAt}
                            </Link>
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default CommentList;