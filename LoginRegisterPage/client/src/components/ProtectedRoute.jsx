import React from 'react';
import { Navigate } from 'react-router-dom';
import '../style.css'; // Import global styles

const ProtectedRoute = ({ isAuthenticated, component }) => {
  return isAuthenticated ? component : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
