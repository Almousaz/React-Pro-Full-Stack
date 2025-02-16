import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import { UserContext } from "../context/UserContext";



const Header = () => {

    const {setUserInfo,userInfo} = useContext(UserContext);
    // const [username,setUsername] = useState(null)

  useEffect(() => {
    fetch('http://localhost:6009/api/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        // setUsername(userInfo.username)
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:6009/api/logout', {
      credentials: 'include',
      method: 'POST',
    });
    // setUsername(userInfo.username)
    setUserInfo(null);
    // setUsername(null)
  }

  const username = userInfo?.username;



  return (
    <>

      <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
      
    </>
  )
}

export default Header
