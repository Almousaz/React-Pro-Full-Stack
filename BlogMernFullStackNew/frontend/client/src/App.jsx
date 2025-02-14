import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import Layout from "./layout/Layout";
import { UserContextProvider } from "./context/UserContext";
import CreatePost from "./pages/createpage/CreatePost";
import PostPage from "./pages/postpage/PostPage";
import EditPost from "./pages/editpostpage/EditPost";
import IndexPage from "./pages/indexpage/IndexPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
