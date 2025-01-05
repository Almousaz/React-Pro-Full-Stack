import React, { useState } from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [info, setInfo] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Example POST request to '/login'
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (result.errors) {
            setErrors(result.errors);
        }

        if (result.info) {
            setInfo(result.info);
        }
    };

    return (
        <div>
            {/* <h1>Login Form</h1> */}
            {/* <Header /> */}
            <main className="container">
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

export default LoginForm;
