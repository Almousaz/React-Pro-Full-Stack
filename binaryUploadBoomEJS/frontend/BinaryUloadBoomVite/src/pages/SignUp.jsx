import React, { useState } from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component

const Signup = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const response = await fetch('http://localhost:5175/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Handle successful signup, e.g., redirect to another page
        } else {
            const errors = await response.json();
            // Handle errors, e.g., display them to the user
            console.log(errors);
        }
    };

    return (
        <div>
            {/* <Header /> */}
            <main className="container">
                <div className="row justify-content-center">
                    <section className="col-6 mt-5">
                        {/* Display error messages if available */}
                        {formData.errors && formData.errors.map((el, index) => (
                            <div key={index} className="alert alert-danger">{el.msg}</div>
                        ))}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
        
    );
};

export default Signup;
