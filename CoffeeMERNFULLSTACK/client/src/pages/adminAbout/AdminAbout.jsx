import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from "axios";
import { toast } from 'react-toastify';
import "./adminAbout.css";
import "../admin/admin.css";
import { NavbarPrivate } from '../../components/navbar2/NavbarPrivate';

export const AdminAbout = () => {
  const [data, setData] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    review: '',
  });
  const [product, setProduct] = useState({
    "name": "",
    "image": "",
    "review": ""
  });

  const getData = () => {
    axios.get("http://localhost:6861/api/about")
      .then((res) => {
        setData(res.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.image || !product.review) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    axios.post('http://localhost:6861/api/about/create', product)
      .then((res) => {
        if (res.data.mssg === "Product Added Successful") {
          toast.success('Product Added Successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setProduct({ "name": "", "image": "", "review": "" });
          getData();
        } else {
          toast.error('Something went wrong. Please try again.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Error while adding product.', {
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

  const handleDelete = (id) => {
    axios.delete(`http://localhost:6861/api/about/delete/${id}`)
      .then((res) => {
        if (res.data.message === "About entry deleted successfully") {
          toast.success('About entry deleted successfully.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('About entry not found.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        getData();
      }).catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (about) => {
    setSelectedAbout(about);
    setEditModalShow(true);
    setFormData({
      name: about.name,
      image: about.image,
      review: about.review,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditSubmit = (id) => {
    axios.put(`http://localhost:6861/api/about/update/${id}`, formData)
      .then((res) => {
        if (res.data.message === "About entry updated successfully") {
          toast.success('About entry updated successfully.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          getData();
          handleClose();
        } else {
          toast.error('About entry not found.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Error while updating about entry.', {
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

  const handleClose = () => {
    setEditModalShow(false);
    setSelectedAbout(null);
  };

  return (
    <div>
      <NavbarPrivate />
      <div className='post-data'>
        <h1>Post About Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder='Title' type="text" name="name" value={product.name} onChange={handleChange} />
          </div>
          <div>
            <input placeholder='Image URL' type="text" name="image" value={product.image} onChange={handleChange} />
          </div>
          <div>
            <input placeholder='Description' type="text" name="review" value={product.review} onChange={handleChange} />
          </div>
          <button type="submit" className="newbutton">Submit</button>
        </form>
      </div>
      <div className="table-div1">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                            {Array.isArray(data) ? (
                    data.map((el) => (
                        <tr key={el._id}>
                        <td>{el.name}</td>
                        <td><img width="100px" height="40px" src={el.image} alt="Product" /></td>
                        <td>{el.review}</td>
                        <td>
                            <button onClick={() => handleEdit(el)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(el._id)}>Delete</button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <p>No data available</p>
                    )}
          </tbody>
        </table>
      </div>

      {/* Edit About Modal */}
      {selectedAbout && (
        <Modal show={editModalShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit About Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={() => handleEditSubmit(selectedAbout._id)}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Review</label>
                <input
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Save
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};
