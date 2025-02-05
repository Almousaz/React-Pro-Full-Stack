import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container flex-grow-1">
        <div className="row justify-content-around mt-5">
        <a href="/login" className="col-3 btn btn-success btn-lg mx-2 my-2 text-center">Login</a>
        <a href="/signup" className="col-3 btn btn-success btn-lg mx-2 my-2 text-center">Signup</a>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
