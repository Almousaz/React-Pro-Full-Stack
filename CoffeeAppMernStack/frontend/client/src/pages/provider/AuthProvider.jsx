
import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Custom sign-up logic
    const createUser = async (email, password) => {
        setLoading(true);
        const response = await fetch('https://your-backend-api.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        setLoading(false);
        if (data.token) {
            localStorage.setItem('token', data.token);
            setUser({ email });
        }
        return data;
    };

    // Custom login logic
    const loggedUser = async (email, password) => {
        setLoading(true);
        const response = await fetch('https://your-backend-api.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        setLoading(false);
        if (data.token) {
            localStorage.setItem('token', data.token);
            setUser({ email });
        }
        return data;
    };

    // Custom logout logic
    const logOut = () => {
        localStorage.removeItem('token');
        setUser(null);
        setLoading(false);
    };

    // Check for stored user token when app loads
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ email: 'someuser@domain.com' });  // Replace with logic to fetch user data if needed
        }
        setLoading(false);
    }, []);

    const authInfo = { user, loading, createUser, loggedUser, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
