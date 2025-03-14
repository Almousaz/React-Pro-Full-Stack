import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({ postID, category, title, description, authorID, thumbnail, createdAt }) => {

    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;

    return (
        <article className='post'>
            <div className='post-thumbnail'>
                <img src={`http://localhost:7380/uploads/${thumbnail}`} alt={title} />
            </div>
            <div className='post-content'>
                <Link to={`http://localhost:7380/api/posts/${postID}`}>
                    <h3>{postTitle}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: shortDescription }} />
                <div className='post-footer'>
                    <PostAuthor authorID={authorID} createdAt={createdAt} />
                    <Link to={`http://localhost:7380/api/posts/categories/${category}`} className='btn category'>{category}</Link>
                </div>
            </div>
        </article>
    )
}

export default PostItem