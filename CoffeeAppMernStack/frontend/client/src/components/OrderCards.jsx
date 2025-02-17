import React from 'react';



const OrderCards = ({ order, HandleDelete, HandleConfirm }) => {


    
    const { _id, uname, email, phone, address, name, num, price, url, status } = order;

    return (
        <div className="card card-side bg-purple-50 shadow-xl w-[600px] m-2">
            <figure>
                <img className="w-[200px] h-[220px] rounded-lg" src={url} alt="coffeeImg" />
            </figure>
            <div className="card-body flex">
                <div className="text-left text-gray-600 mb-2">
                    <h2 className="card-title text-violet-600">{name}</h2>
                    <p className="text-lg">Customer Name: <span className="font-medium">{uname}</span></p>
                    <p>Address: {address}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Number of Orders: <b>{num}</b></p>
                    <p>Total Price: <b>{price * num} BDT</b></p>
                </div>
                
                <div className="card-actions flex gap-2">
                    {status === 'confirm' ? (
                        <span className="font-bold text-success">Order Confirmed</span>
                    ) : (
                        <>
                            <button className="btn btn-sm btn-primary" onClick={() => HandleConfirm(_id)}>
                                Confirm Order
                            </button>
                            <button className="btn btn-sm btn-error" onClick={() => HandleDelete(_id)}>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderCards;
