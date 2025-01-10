import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Left side: Links to Home, Login, Register */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/login" className="hover:text-gray-600">Login</Link>
          <Link to="/register" className="hover:text-gray-600">Register</Link>
        </div>
        
        {/* Right side: Brand/Company Name */}
        <div className="text-lg font-bold">
          MyBrand
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
