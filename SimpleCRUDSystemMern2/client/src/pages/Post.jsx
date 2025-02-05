// import React from 'react';
// import Header from '../components/Header'; // Assuming you have a Header component
// import Footer from '../components/Footer'; // Assuming you have a Footer component

// const Post = ({ post, user }) => {
//     return (
//         <div>
//             <h1>Post Detail Page</h1>
//             <Header />
//             <div className="container">
//                 <div className="row justify-content-center mt-5">
//                     <div className="col-6">
//                         <h2>{post.title}</h2>
//                         <img className="img-fluid" src={post.image} alt={post.title} />
//                         <div className="row justify-content-between">
//                             <form
//                                 className="col-1"
//                                 action={`/post/likePost/${post.id}?_method=PUT`}
//                                 method="POST"
//                             >
//                                 <button className="btn btn-primary fa fa-heart" type="submit"></button>
//                             </form>
//                             <h3 className="col-3">Likes: {post.likes}</h3>
//                             {post.user === user.id && (
//                                 <form
//                                     action={`/post/deletePost/${post.id}?_method=DELETE`}
//                                     method="POST"
//                                     className="col-3"
//                                 >
//                                     <button className="btn btn-primary fa fa-trash" type="submit"></button>
//                                 </form>
//                             )}
//                         </div>
//                     </div>
//                     <div className="col-3 mt-5">
//                         <p>{post.caption}</p>
//                     </div>
//                     <div className="col-6 mt-5">
//                         <a className="btn btn-primary" href="/profile">Return to Profile</a>
//                         <a className="btn btn-primary" href="/feed">Return to Feed</a>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Post;



import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect , useState } from 'react';

const Post = () => {


         const [user, setUser] = useState(null);
        const [post, setPost] = useState([]);

    // Fetch user data and posts when the page loads
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4541/api/v1/user/profile', {
                    withCredentials: true, // Ensure authentication is handled
                });

                setUser(response.data.user);
                setPosts(response.data.posts);
                setLoading(false);
            } catch (error) {
                console.error("🚨 Error fetching user data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleLike = async () => {
        try {
            await axios.put(`http://localhost:4541/api/v1/post/likePost/${post.id}`);
            alert("Post liked!");
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await axios.delete(`http://localhost:4541/api/v1/post/deletePost/${post.id}`);
                alert("Post deleted successfully!");
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

    return (
        <div>
            <h1>Post Detail Page</h1>
            <Header />
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <h2>{post.title}</h2>
                        <img className="img-fluid" src={post.image} alt={post.title} />
                        <div className="row justify-content-between">
                            <button className="btn btn-primary fa fa-heart" onClick={handleLike}></button>
                            <h3 className="col-3">Likes: {post.likes}</h3>
                            {post.user === user.id && (
                                <button className="btn btn-primary fa fa-trash" onClick={handleDelete}></button>
                            )}
                        </div>
                    </div>
                    <div className="col-3 mt-5">
                        <p>{post.caption}</p>
                    </div>
                    <div className="col-6 mt-5">
                        <a className="btn btn-primary" href="/profile">Return to Profile</a>
                        <a className="btn btn-primary" href="/feed">Return to Feed</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Post;