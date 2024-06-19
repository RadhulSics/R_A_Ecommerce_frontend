import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderdetailsSeller.css';

function OrderdetailsSeller() {
  const [orders, setOrders] = useState([]);
  const sid = localStorage.getItem('sid');

  useEffect(() => {
    const fetchSellerHistory = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/sellerHistory/${sid}`);
        if (response.data && response.data.data) {
          setOrders(response.data.data.purchases); 
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSellerHistory();
  }, [sid]);

  console.log(orders);

  return (
    <div className='orderS-main'>
      <hr/>
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
              <div className='orderS-rating-flex'>
                <h5>Buyer details</h5>
                <div>{order.uid ?  'Name : ' + order.uid.name : 'Not available'}</div>
                <div>{order.uid ?  'Email : ' + order.uid.email : 'Not available'}</div>
                <div>{order.uid ?  'Number : ' + order.uid.number : 'Not available'}</div>
              </div>
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
