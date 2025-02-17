import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OrderCards from "./OrderCards";
import { AuthContext } from "../pages/provider/AuthProvider";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;  // Avoid fetching if email is undefined

        const url = `https://ahmeds-coffee-express.vercel.app/orderCoffee?email=${user.email}`;
        
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setOrders(data);
                } else {
                    navigate('/');
                }
            })
            .catch(error => console.error("Error fetching orders:", error));
    }, [user?.email, navigate]);

    const HandleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ahmeds-coffee-express.vercel.app/orderCoffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Coffee has been deleted.', 'success');
                            setOrders((prevOrders) => prevOrders.filter(o => o._id !== _id));
                        }
                    })
                    .catch(error => console.error("Error deleting order:", error));
            }
        });
    };

    const HandleConfirm = (_id) => {
        fetch(`https://ahmeds-coffee-express.vercel.app/orderCoffee/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Confirmed',
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    setOrders((prevOrders) =>
                        prevOrders.map(order =>
                            order._id === _id ? { ...order, status: 'confirm' } : order
                        )
                    );
                }
            })
            .catch(error => console.error("Error confirming order:", error));
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mt-8">All Orders</h2>
            <p>Number of orders: {orders.length}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
                {orders.map(order => (
                    <OrderCards
                        key={order._id}
                        order={order}
                        HandleDelete={HandleDelete}
                        HandleConfirm={HandleConfirm}
                    />
                ))}
            </div>
        </div>
    );
};

export default Orders;
