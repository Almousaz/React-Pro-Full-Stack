import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const PostAuthor = ({ authorID, createdAt }) => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const response = await axios.get(`http://localhost:7380/api/user/${authorID}`)
                setAuthor(response?.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAuthor();
    }, [])

    return (
        <Link to={`http://localhost:7380/api/posts/users/${authorID}`} className='post-author'>
            <div className='post-author-avatar'>
                <img src={`http://localhost:7380/uploads/${author?.avatar}`} alt='' />
            </div>
            <div className='post-author-details'>
                <h5>By : {author?.name}</h5>
                <small><ReactTimeAgo date={new Date(createdAt)} locale='en-US' /></small>
            </div>
        </Link>
    )
}

export default PostAuthor