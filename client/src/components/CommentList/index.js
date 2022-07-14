import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments }) => {
    return (
        <div className="border border-info m-2">
            <div className="text-center">
                <span className="h5">Comments</span>
            </div>
            <div className="p-2">
                {comments &&
                    comments.map(comment => (
                        <p className="" key={comment._id}>
                            {comment.commentText} || {' '}
                            <Link to={`profile/${comment.username}`}>
                                {comment.username}
                            </Link>
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default CommentList;