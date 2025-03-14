import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor.jsx";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import DeletePost from "./DeletePost.jsx";
import { UserContext } from "../context/userContext.jsx";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:7380/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-detail-container">
          <div className="post-detail-header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id == post?.creator && (
              <div className="post-detail-buttons">
                <Link
                  to={`http://localhost:7380/api/posts/${post?._id}`}
                  className="btn sm primary"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail-thumbnail">
            <img
              src={`http://localhost:7380/uploads/${post.thumbnail}`}
              alt=""
            />
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetail;
