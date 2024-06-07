import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderdetailsSeller.css';

function OrderdetailsSeller() {
  const [orders, setOrders] = useState([]);
  const sid = localStorage.getItem('sid')

  useEffect(() => {
    axios.post(`http://localhost:3000/sellerHistory/${sid}`)
      .then((response) => {
        if (response.data && response.data.data) {
          setOrders(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(orders);

  return (
    <div className='orderS-main'>
      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="orderS-flex"> 
            <div>
              {order.pid && order.pid.image1 && (
                <img className="orderS-img" src={`http://localhost:3000/${order.pid.image1.filename}`} alt="Product" />
              )}
            </div> 
            <div className='orderS-details'>
              {order.pid ? order.pid.name : 'Product name not available'}
            </div>
            <div className='orderS-price'>
              {order.pid ? 'Rs. ' + order.pid.price : 'Price not available'}
            </div>
            <div className='orderS-rating'>
              {order.pid && order.pid.rating ? order.pid.rating.rate + '⭐' : 'Rating not available'}
            </div>
            <div className='orderS-date'>
              <p>Ordered date: <b>{new Date(order.date).toLocaleDateString()}</b></p>
            </div>  
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default OrderdetailsSeller;
