import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderHistory.css';

function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const uid = localStorage.getItem("uid");

    useEffect(() => {
        axios.post(`http://localhost:3000/viewHistory/${uid}`)
            .then((response) => {
                setOrders(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log('Orders:', orders);

    return (
        <div className='orderH-main'>
            <div>
                <input type='text' placeholder='Search your orders here' className='orderH-input'></input>
                <button className="orderH-btn" type='submit'>Search</button>
            </div>
            {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index} className="orderH-flex">
                        <div>
                            <img className="orderH-img" src={`http://localhost:3000/${order.pid.image1.filename}`} alt="Order" />
                        </div>
                        <div className='orderH-details'>
                            {order.pid.name}
                        </div>
                        <div className='orderH-price'>
                            {'Rs. ' + order.pid.price}
                        </div>
                        {/* <div className='orderH-rating'>
                            {order.rating.rate + '⭐'}
                        </div> */}
                        <div className='orderH-date'>
                            <p>Delivered date:<b>{new Date(order.date).toLocaleDateString()}</b></p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}

export default OrderHistory;
