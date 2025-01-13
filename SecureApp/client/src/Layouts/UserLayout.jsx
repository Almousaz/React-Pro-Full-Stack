import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const  UserLayout = () => {
    const user=useSelector((state) => state.Auth.user)
    const navgiate=useNavigate()
    

    useEffect(()=>{
          if (!user) {
               navgiate('/login')
          }
    },[user])
  return (
    <Outlet/>
  )
}

export default UserLayout