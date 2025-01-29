import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader.jsx'

const Author = () => {

    const [authors, setAuthors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getAuthors = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`http://localhost:7380/api/user`)
                setAuthors(response.data)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        getAuthors()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='authors h-full'>
            {authors.length > 0 ?
                <div className='container authors-container'>
                    {
                        authors.map(({ _id: id, avatar, name, posts }) => {
                            return <Link to={`/posts/users/${id}`} className='author'>
                                <div className='author-avatar'>
                                    <img src={`http://localhost:7380/api/uploads/${avatar}`} alt={`avatar of ${name}`} />
                                </div>
                                <div className='author-info'>
                                    <h4>{name}</h4>
                                    <p>{posts} {posts > 1 ? "posts" : "post"}</p>
                                </div>
                            </Link>
                        })
                    }
                </div> : <h2 className='center h-full'>No authors found.</h2>}
        </section>
    )
}

export default Author