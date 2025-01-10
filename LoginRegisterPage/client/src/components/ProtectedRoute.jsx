import React from 'react';
import { Navigate } from 'react-router-dom';
import '../style.css'; // Import global styles

// const ProtectedRoute = ({ isAuthenticated, component }) => {
//     if (!isAuthenticated) {
//       return <Navigate to="/login" replace />;
//     }
  
//     return component;
//   };
  
const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };

  
  export default ProtectedRoute;
