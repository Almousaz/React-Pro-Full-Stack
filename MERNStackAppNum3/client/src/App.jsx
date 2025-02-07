import React from 'react'
import './App.css'
import User from './getUser/User'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import AddUser from './addUser/AddUser'
import UpdateUser from './updateuser/Update'

function App() {

  const route = createBrowserRouter([
    {
      path : "/",
      element : <User />
    },
    {
      path : "/add",
      element : <AddUser />
    },
    {
      path : "/update/:id",
      element : <UpdateUser />
    }
  ])

  return (
    <>
    <div className='App'>
      <h1>This is react app</h1>
      <RouterProvider router={route}></RouterProvider>
    </div>
    </>
  )
}

export default App
