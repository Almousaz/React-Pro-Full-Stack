// import React, { useState } from 'react';
// import Header from '../components/Header'; // Assuming you have a Header component
// import Footer from '../components/Footer'; // Assuming you have a Footer component
// import axios from 'axios';




// const ProfilePage = ({ user, posts }) => {
//     const [formData, setFormData] = useState({
//         title: '',
//         caption: '',
//         file: null,
//     });

//     const handleChange = (e) => {
//         if (e.target.name === 'file') {
//             setFormData({
//                 ...formData,
//                 [e.target.name]: e.target.files[0],
//             });
//         } else {
//             setFormData({
//                 ...formData,
//                 [e.target.name]: e.target.value,
//             });
//         }
//     };
   
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const form = new FormData();
//         form.append('title', formData.title);
//         form.append('caption', formData.caption);
//         form.append('file', formData.file);
    
//         try {
//             const response = await axios.post(
//                 'http://localhost:4541/api/v1/post/createPost', 
//                 form, 
//                 { headers: { 'Content-Type': 'multipart/form-data' } } // Important for file uploads
//             );
    
//             console.log("🔹 Response:", response.data);
    
//             if (response.status === 201) {
//                 alert("✅ Post created successfully!");
//                 // Optionally, refresh posts or update state
//             } else {
//                 alert(response.data.message || "❌ Failed to create post.");
//             }
//         } catch (error) {
//             console.error("🚨 Post creation failed:", error);
    
//             if (error.response) {
//                 alert(error.response.data.message || "Something went wrong. Try again.");
//             } else if (error.request) {
//                 alert("❌ No response from server. Please check your connection.");
//             } else {
//                 alert("❌ An unexpected error occurred.");
//             }
//         }
//     };
    

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     const form = new FormData();
//     //     form.append('title', formData.title);
//     //     form.append('caption', formData.caption);
//     //     form.append('file', formData.file);

//     //     const response = await fetch('http://localhost:4541/api/v1/post/createPost', {
//     //         method: 'POST',
//     //         body: form,
//     //     });

//     //     if (response.ok) {
//     //         // Optionally refresh posts or handle success
//     //     }
//     // };

//     return (
//         <div>
//             <h1>User Profile</h1>
//             <Header />
//             <div className="container">
//                 <div className="row mt-5">
//                     <div className="col-6">
//                         <div>
//                             <p><strong>User Name</strong>: {user.userName}</p>
//                             <p><strong>Email</strong>: {user.email}</p>
//                             <a href="/logout" className="btn btn-primary">Logout</a>
//                         </div>
//                         <div className="mt-5">
//                             <h2>Add a post</h2>
//                             <form onSubmit={handleSubmit} enctype="multipart/form-data">
//                                 <div className="mb-3">
//                                     <label htmlFor="title" className="form-label">Title</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="title"
//                                         name="title"
//                                         value={formData.title}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="caption" className="form-label">Caption</label>
//                                     <textarea
//                                         className="form-control"
//                                         id="caption"
//                                         name="caption"
//                                         value={formData.caption}
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="imageUpload" className="form-label">Image</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         id="imageUpload"
//                                         name="file"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <ul className="row list-unstyled">
//                             {posts.map((post) => (
//                                 <li key={post._id} className="col-6 justify-content-between mt-5">
//                                     <a href={`/post/${post._id}`}>
//                                         <img className="img-fluid" src={post.image} alt={post.title} />
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className="row justify-content-center mt-5">
//                             <a className="btn btn-primary" href="/feed">Return to Feed</a>
//                         </div>  
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default ProfilePage;



import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
        file: null,
    });
    const [loading, setLoading] = useState(true);

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

    // Handle input changes
    const handleChange = (e) => {
        if (e.target.name === 'file') {
            setFormData({
                ...formData,
                file: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('title', formData.title);
        form.append('caption', formData.caption);
        form.append('file', formData.file);

        try {
            const response = await axios.post(
                'http://localhost:4541/api/v1/post/createPost',
                form,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            console.log("🔹 Response:", response.data);

            if (response.status === 201) {
                alert("✅ Post created successfully!");
                setPosts([...posts, response.data.post]); // Update posts state
            } else {
                alert(response.data.message || "❌ Failed to create post.");
            }
        } catch (error) {
            console.error("🚨 Post creation failed:", error);
            alert("❌ Something went wrong. Try again.");
        }
    };

    if (loading) return <h2>Loading...</h2>;
    if (!user) return <h2>User not found. Please log in.</h2>;

    return (
        <div>
            <h1>User Profile</h1>
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <div>
                            <p><strong>User Name</strong>: {user.userName}</p>
                            <p><strong>Email</strong>: {user.email}</p>
                            <a href="/logout" className="btn btn-primary">Logout</a>
                        </div>
                        <div className="mt-5">
                            <h2>Add a post</h2>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="caption" className="form-label">Caption</label>
                                    <textarea
                                        className="form-control"
                                        id="caption"
                                        name="caption"
                                        value={formData.caption}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imageUpload" className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="imageUpload"
                                        name="file"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className="row list-unstyled">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <li key={post._id} className="col-6 justify-content-between mt-5">
                                        <a href={`/post/${post._id}`}>
                                            <img className="img-fluid" src={post.image} alt={post.title} />
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <p>No posts yet.</p>
                            )}
                        </ul>
                        <div className="row justify-content-center mt-5">
                            <a className="btn btn-primary" href="/feed">Return to Feed</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
