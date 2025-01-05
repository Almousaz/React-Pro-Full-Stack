
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage'
// import NewPostPage from './pages/NewPostPage'
// import PostPage from './pages/PostPage'
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import LoginSignupPage from './pages/index'; // eslint-disable-line
import LoginForm from './pages/Login';
import PostDetailPage from './pages/Post';
import UserProfile from './pages/Profile';
import Signup from './pages/SignUp';

  


function App() {

  return (
    <>

    <Router>
      <NavBar />
      {/* Conditionally render NavBar */}
      {/* {!isIndexPage && <NavBar />} */}
      <Container>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:id" element={<PostPage />} /> */}
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/postdetailpage" element={<PostDetailPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </Container>
    </Router>

    </>
  )
}

export default App
