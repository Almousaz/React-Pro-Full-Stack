import React, { useState } from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component

const UserProfile = ({ user, posts }) => {
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
        file: null,
    });

    const handleChange = (e) => {
        if (e.target.name === 'file') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('title', formData.title);
        form.append('caption', formData.caption);
        form.append('file', formData.file);

        const response = await fetch('/post/createPost', {
            method: 'POST',
            body: form,
        });

        if (response.ok) {
            // Optionally refresh posts or handle success
        }
    };

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
                            <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                            {posts.map((post) => (
                                <li key={post._id} className="col-6 justify-content-between mt-5">
                                    <a href={`/post/${post._id}`}>
                                        <img className="img-fluid" src={post.image} alt={post.title} />
                                    </a>
                                </li>
                            ))}
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

export default UserProfile;
