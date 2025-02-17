import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from '../pages/provider/AuthProvider';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, url } = coffee;
    const { user } = useContext(AuthContext);

    const HandleDelete = async (_id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`https://your-api.com/coffees/${_id}`, { method: "DELETE" });
                const data = await res.json();

                if (data.deletedCount > 0) {
                    Swal.fire('Deleted!', 'Coffee has been deleted.', 'success');
                    setCoffees(coffees.filter(cof => cof._id !== _id));
                }
            } catch (error) {
                console.error("Error deleting coffee:", error);
            }
        }
    };

    return (
        <div className="card card-side bg-purple-50 shadow-xl w-[500px] m-2">
            <figure>
                <img className="w-40 h-36 rounded-lg" src={url} alt="coffeeImg" />
            </figure>
            <div className="card-body text-gray-500 flex text-left">
                <div>
                    <h2 className="card-title text-violet-600">{name}</h2>
                    <p>Price: <b>{price} BDT</b></p>
                </div>

                {user ? (
                    <div className="card-actions flex gap-2">
                        <Link to={`/UpdateCoffee/${_id}`}>
                            <button className="btn btn-sm btn-warning">Update</button>
                        </Link>
                        <Link to={`/OrderCoffee/${_id}`}>
                            <button className="btn btn-sm btn-success">Order</button>
                        </Link>
                        <button className="btn btn-sm btn-error" onClick={() => HandleDelete(_id)}>Delete</button>
                    </div>
                ) : (
                    <span>Login to order, update, and remove</span>
                )}
            </div>
        </div>
    );
};

export default CoffeeCard;
