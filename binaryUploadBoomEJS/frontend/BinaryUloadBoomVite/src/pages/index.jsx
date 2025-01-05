import React from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component

const LoginSignupPage = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="row justify-content-around mt-5">
                    <a href="/login" className="col-3 btn btn-primary">Login</a>
                    <a href="/signup" className="col-3 btn btn-primary">Signup</a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LoginSignupPage;
