import React from 'react'
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from '../provider/AuthProvider';



const Signup = () => {


    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
    
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;
        const redirectPath = location?.state?.from?.pathname || "/";
    
        // Validate password for at least one uppercase letter
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
    
        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
    
        try {
            // Use the createUser function from AuthContext (replace this logic with your custom implementation)
            const result = await createUser(email, password);  // Assuming createUser handles user creation
           
            // If the user is created successfully, update their profile
            if (result?.user) {
                // Update profile logic here (if needed)
                await updateUserProfile(result.user.id, name, photo);
    
                // Success notification
                Swal.fire({
                    title: "<span style='color: brown;'>Successfully Signed Up!</span>",
                    html: "Closing in <b></b> seconds.",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector("b");
                        setInterval(() => b.textContent = Swal.getTimerLeft(), 100);
                    }
                }).then(() => navigate(redirectPath, { replace: true }));
            } else {
                setError("Registration failed.");
            }
        } catch (err) {
            setError(err.message || "An error occurred while signing up. Please try again.");
        }
    };
    
    // A function to update the user profile
    const updateUserProfile = async (userId, name, photoURL) => {
        // Your custom profile update logic here, like sending the updated details to your backend
        const response = await fetch('/api/updateProfile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, displayName: name, photoURL })
        });
    
        if (!response.ok) {
            throw new Error("Failed to update profile.");
        }
    };
    

    
      




  return (
    <>

        <div className="flex flex-col items-center mt-8">
            <form onSubmit={handleRegister} className="w-80 p-6 shadow-lg rounded-lg bg-white">
                <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-3" required />
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full mb-3" required />
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full mb-3" required />
                <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                <button type="submit" className="btn btn-info w-full mt-4">Sign Up</button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
      
    </>
  )
}

export default Signup
