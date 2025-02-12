import { useState } from 'react';

import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import react-toastify styles
import { NavbarPrivate } from '../../components/navbar2/NavbarPrivate';
import "./admin.css";

export const Admin = () => {
  const [product, setProduct] = useState({
    "title": "",
    "image": "",
    "desc": "",
    "price": ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:6861/api/product/create`, product)
      .then((res) => {
        // console.log(res)
        if (res.data.mssg === "Product Already Exists") {
          toast.error('Product Already Exists', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success('Product Added Successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setProduct({
            "title": "",
            "image": "",
            "desc": "",
            "price": ""
          });
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Error adding product, please try again', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <NavbarPrivate />
      <div className='post-data'>
        <h1>Post Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder='Title' type="text" name="title" value={product.title} onChange={handleChange} />
          </div>
          <div>
            <input placeholder='Image URL' type="text" name="image" value={product.image} onChange={handleChange} />
          </div>
          <div>
            <input placeholder='Description' type="text" name="desc" value={product.desc} onChange={handleChange} />
          </div>
          <div>
            <input placeholder='Price' type="text" name="price" value={product.price} onChange={handleChange} />
          </div>
          <button type="submit" className="newbutton">Submit</button>
        </form>
      </div>
    </div>
  );
}
