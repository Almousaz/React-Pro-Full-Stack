import React, { useState } from 'react';
import Footer from '../components/Footer'; 
import Header from '../components/Header';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';




const LoginPage = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [info, setInfo] = useState([]);



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("🔹 Sending Login Request with:", { email, password });
    
    //     try {
    //         const response = await axios.post(
    //             'http://localhost:4541/api/v1/login', 
    //             { email, password }, 
    //             { withCredentials: true } // Ensures session/cookies
    //         );
    
    //         console.log("🔹 Server Response:", response);
    
    //         const result = response.data;
    //         if (result.errors) {
    //             setErrors(result.errors);
    //             return;
    //         }
    
    //         if (result.success) {
    //             console.log("🔹 Login Success! Redirecting...");
    //             navigate('/userprofile'); // Redirect to profile
    //         }
    
    //     } catch (error) {
    //         console.error("🚨 Login Failed:", error);
    
    //         if (error.response) {
    //             console.error("🔸 Error Response:", error.response.data);
    //             setErrors([{ msg: error.response.data.message || 'Login failed' }]);
    //         } else if (error.request) {
    //             console.error("🔸 No Response from Server");
    //             setErrors([{ msg: 'No response from server. Please try again later.' }]);
    //         } else {
    //             console.error("🔸 Unexpected Error:", error.message);
    //             setErrors([{ msg: 'An unexpected error occurred. Please try again.' }]);
    //         }
    //     }
    // };
    

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log()
        try {
            const response = await axios.post('http://localhost:4541/api/v1/login', 
                { email, password }, 
                { withCredentials: true } // Ensure cookies/sessions are handled
            );
    
            const result = response.data; // Axios automatically parses JSON
            console.log(response)
            if (result.errors) {
                setErrors(result.errors);
                return;
            }
    
            if (result.info) {
                setInfo(result.info);
            }
    
            if (result.success) {
                navigate('/userprofile'); // Redirect to profile on success
            }
    
        } catch (error) {
            console.error("Login failed:", error);
    
            if (error.response) {
                setErrors([{ msg: error.response.data.message || 'Login failed' }]);
            } else if (error.request) {
                setErrors([{ msg: 'No response from server. Please try again later.' }]);
            } else {
                setErrors([{ msg: 'An unexpected error occurred. Please try again.' }]);
            }
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* <h1>Login Form</h1> */}
            <Header />
            <main className="container flex-grow-1">
                <div className="row justify-content-center">
                    <section className="col-6 mt-5">
                        {errors.length > 0 && errors.map((error, index) => (
                            <div key={index} className="alert alert-danger">
                                {error.msg}
                            </div>
                        ))}
                        {info.length > 0 && info.map((message, index) => (
                            <div key={index} className="alert alert-info">
                                {message.msg}
                            </div>
                        ))}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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

export default LoginPage;
