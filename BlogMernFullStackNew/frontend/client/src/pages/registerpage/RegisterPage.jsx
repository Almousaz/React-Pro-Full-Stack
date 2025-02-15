import {useState} from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    // Function to show a toast notification
      const notify = () => {
          toast.success("user registered successfully!", {
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



  const register =  async (e) => {


    e.preventDefault();
    const response = await fetch('http://localhost:6009/api/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      notify();
    //   alert('registration successful');
    } else {
       notifyError()
    //   alert('registration failed');
    }
    
  }


  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={e => setUsername(e.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={e => setPassword(e.target.value)}/>
      <button>Register</button>
    </form>
  );
}

export default RegisterPage
