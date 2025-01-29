import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Author from './pages/Author';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import UserProvider from './context/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="author" element={<Author />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="posts/categories/:category" element={<CategoryPosts />} />
            <Route path="posts/users/:id" element={<AuthorPosts />} />
            <Route path="myposts/:id" element={<Dashboard />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="posts/:id/delete" element={<DeletePost />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
