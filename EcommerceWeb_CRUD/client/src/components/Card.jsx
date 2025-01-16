import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';



const Card = () => {
  return (
    <>
    
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className='mb-4'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        
        <div className="flex space-x-2">
              <button className="btn btn-outline btn-sm flex items-center space-x-1 text-sm" >
                <FaEdit /> <span>Edit</span>
              </button>
              <button className="btn btn-outline btn-error btn-sm flex items-center space-x-1 text-sm" >
                <FaTrash /> <span>Delete</span>
              </button>
            </div>



        </div>
    </div>
    </div>
    
    </>
  )
}

export default Card

