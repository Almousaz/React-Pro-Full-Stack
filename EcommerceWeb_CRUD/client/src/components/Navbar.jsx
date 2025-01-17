import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../redux/slices/AuthSlice'

const Navbar = () => {



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {

        dispatch(logOut())
        navigate('/login')

    }

    const handleAddModal = () => {
      document.getElementById('addProductModal').showModal();
    }



  return (





    <div>
      

      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">E-Shop</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        <li onClick={handleAddModal}><a>Add Products</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>




    </div>
  )
}

export default Navbar
