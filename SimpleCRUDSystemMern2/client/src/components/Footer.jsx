import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white text-center py-4 mt-5" style={{ backgroundColor: '#6482AD' }}>
            <p>&copy; {new Date().getFullYear()} Your Company</p>
            <p>All rights reserved.</p>
        </footer>
    );
};

export default Footer;
