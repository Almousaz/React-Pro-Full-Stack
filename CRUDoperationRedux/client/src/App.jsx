import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './redux/userSlice'



function App() {

  const dispatch = useDispatch()
  

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get('http://localhost:8383/api/user');
            dispatch(getUser(response.data));
        } catch(err) {
            console.log(err)
        }
    }
    fetchData();
}, [])



  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
