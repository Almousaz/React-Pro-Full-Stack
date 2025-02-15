import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";




const LoginPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);

  const {setUserInfo} = useContext(UserContext);


    // Function to show a toast notification
    const notify = () => {
        toast.success("user loged in successfuly!", {
          position: "top-right",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      };
      const notifyError = () => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      };


  const login =  async  (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:6009/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    // if (response.ok) {
    // //   response.json().then(userInfo => {
    // //     setUserInfo(userInfo);
    //     notify();
    //     // setRedirect(true);
    //   });
    // } else {
    //     notifyError()
    //     // alert('wrong credentials');
    // }
  }



  if (redirect) {
    return <Navigate to={'/'} />
  }


  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}/>
      <button>Login</button>
    </form>
  );
}

export default LoginPage