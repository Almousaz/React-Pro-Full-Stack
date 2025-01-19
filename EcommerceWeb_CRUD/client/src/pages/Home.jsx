import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddProductModal from "../components/AddProductModal";
import EditModal from "../components/EditModal";
import Delete from "../components/delete";
import toast from "react-hot-toast";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [productId, setProductId] = useState("");
  // console.log('productId' , productId)
  const [show, setShow] = useState(false);
  const [delId, setDelId] = useState("");
  const { Auth } = useSelector((state) => state.auth);
  console.log("User Auth:", Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    GetProducts();
  }, [reload]);

  const GetProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5250/product/getProducts/${Auth._id}`
      );

      const data = response.data;
      console.log("API Response:", response.data);
      setProducts(data.Products);
      console.log("products", data);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    document.getElementById("addProductModal").close();
  };

  const handleEditItem = (item) => {
    // alert('hello')
    setProductId(item);
    document.getElementById("editmodal").showModal();
  };
  const closeEditModal = () => {
    document.getElementById("editmodal").close();
  };

  const handleDelete = async (id) => {
    setDelId(id);
    setShow(true);
  };

  const handleDeleteApi = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5250/product/delete/${delId}`
      );

      const data = response.data;
      console.log("delete", data);
      if (response.status == 200) {
        toast.success(data.message, {
          style: {
            zIndex: 999,
          },
        });
        setShow(false);

        setReload((prev) => !prev);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <AddProductModal closeModal={closeModal} setReload={setReload} />
      <EditModal
        item={productId}
        closeModal={closeEditModal}
        setReload={setReload}
      />
      <Delete setShow={setShow} show={show} handleDlete={handleDeleteApi} />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Card Collection
          </h1>
          <p className="text-gray-600">Explore the different options below</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rendering multiple cards */}
          {products.length === 0 ? (
            <h1 className="text-center font-bold text-xl text-gray-800">
              No Product Found
            </h1>
          ) : (
            ""
          )}
          {products.map((item) => {
            return (
              <Card
                key={item.id} // Ensure to add a unique key for each card
                item={item}
                handleEdit={() => handleEditItem(item)}
                handleDelete={() => handleDelete(item._id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
