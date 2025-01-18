import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';



const Card = ({item , handleEdit , handleDelete}) => {

  console.log('itemdata' , item)



  return (
    <>
    
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
        <img
        src= {item.Image_url}
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className='mb-4'>{item.desc}</p>
        <div className="card-actions justify-end">
        
        <div className="flex space-x-2">
              <button onClick={handleEdit} className="btn btn-outline btn-sm flex items-center space-x-1 text-sm" >
                <FaEdit /> <span>Edit</span>
              </button>
              <button onClick={handleDelete} className="btn btn-outline btn-error btn-sm flex items-center space-x-1 text-sm" >
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

