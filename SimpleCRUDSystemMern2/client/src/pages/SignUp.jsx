import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState([]); // State for storing error messages

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
    
        const errors = [];
    
        if (!formData.userName) {
            errors.push({ msg: 'Username is required!' });
        }
    
        if (!formData.email) {
            errors.push({ msg: 'Email is required!' });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.push({ msg: 'Please enter a valid email address.' });
        }
    
        if (!formData.password) {
            errors.push({ msg: 'Password is required!' });
        }
    
        if (errors.length > 0) {
            setErrors(errors);
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:4541/api/v1/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                setErrors([{ msg: 'An unexpected error occurred. Please try again.' }]);
            }
        }
    };
    
    
    

    return (
        <div>
            <Header />
            <main className="container">
                <div className="row justify-content-center">
                    <section className="col-6 mt-5">
                        {/* Display error messages if available */}
                        {errors.length > 0 && errors.map((el, index) => (
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
                                    id="email"
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
