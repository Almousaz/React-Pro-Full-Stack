import React from 'react';

const Feed = ({ posts }) => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <ul className="row list-unstyled">
                    {posts.map(post => (
                        <li key={post._id} className="col-6 justify-content-between mt-5">
                            <a href={`/post/${post._id}`}>
                                <img className="img-fluid" src={post.image} alt="Post" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Feed;
