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
            {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index} className="orderH-flex">
                        <div>
                            {order.pid?.image1?.filename ? (
                                <img
                                    className="orderH-img"
                                    src={`http://localhost:3000/${order.pid.image1.filename}`}
                                    alt={order.pid?.name || 'Order'}
                                />
                            ) : (
                                <div className="orderH-img-placeholder">
                                    {order.pid?.name || 'No Image Available'}
                                </div>
                            )}
                        </div>
                        <div className='orderH-details'>
                            {order.pid?.name || 'Unknown Product'}
                        </div>
                        <div className='orderH-price'>
                            {order.pid?.brand || 'No Brand'}
                        </div>
                        <div className='orderH-price'>
                            {'Rs. ' + (order.pid?.price || 'N/A')}
                        </div>
                        <div>
                            <h5>Address</h5>
                            <div>{order.aid ? 'Name: ' + order.aid.name : 'Not available'}</div>
                            <div>{order.aid ? 'Number: ' + order.aid.number : 'Not available'}</div>
                            <div>{order.aid ? 'Pin code: ' + order.aid.pin : 'Not available'}</div>
                            <div>{order.aid ? 'State: ' + order.aid.state : 'Not available'}</div>
                            <div>{order.aid ? 'City: ' + order.aid.city : 'Not available'}</div>
                        </div>
                        <div className='orderH-date'>
                            <p>Ordered date: <b>{order.date ? new Date(order.date).toLocaleDateString() : 'Unknown'}</b></p>
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
