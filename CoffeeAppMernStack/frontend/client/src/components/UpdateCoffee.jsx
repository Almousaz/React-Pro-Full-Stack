import React from 'react'
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffeeData = useLoaderData();
    const { _id, name, price, url } = coffeeData;




    const HandleUpdateCoffee = async (e) => {
        e.preventDefault();
    
        const name = e.target.name.value;
        const price = e.target.price.value;
        const url = e.target.url.value;
    
        const updatedCoffee = { name, price, url };
    
        if (!_id) {
            Swal.fire({
                icon: 'error',
                title: 'Missing ID',
                text: 'Could not find the coffee item to update.',
            });
            return;
        }
    
        try {
            const response = await fetch(`https://ahmeds-coffee-express.vercel.app/coffee/${_id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCoffee)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
    
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Coffee Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'No changes made',
                    text: 'The data was the same as before.',
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error updating coffee:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'Something went wrong. Please try again.',
            });
        }
    };
    


  return (
    <>

    <div className="">
        <h2 style={{ fontSize: '30px', fontWeight: '700', marginTop: '30px' }}>Update Coffee</h2>
        <br></br>
        <form onSubmit={HandleUpdateCoffee}>
            <div className=" flex justify-between">
                <div className="">
                    <span>Coffee: </span>
                    <input name="name" type="text" placeholder="" className="input input-bordered" defaultValue={name} />
                </div><br></br>
                <div className="">
                    <span>Price: </span>
                    <input name="price" type="number" placeholder="" className="input input-bordered"  defaultValue={price}/>
                </div><br></br>
                <div className="">
                    <span>Coffee Image URL: </span>
                    <input name="url" type="text" placeholder="" className="input input-bordered"  defaultValue={url}/>
                </div>
            </div>
            <br></br>
            <button className="btn btn-block">Update Coffee</button>
        </form>
    </div>


      
    </>
  )
}

export default UpdateCoffee
