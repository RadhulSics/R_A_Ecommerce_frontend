import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderdetailsSeller.css';

function OrderdetailsSeller() {
  const [orders, setOrders] = useState([]);
  const sellerid = localStorage.getItem('sellerid');

  useEffect(() => {
    const fetchSellerHistory = async () => {
      try {
        const response = await axios.post(`http://localhost:4030/sellerHistory/${sellerid}`);
        if (response.data && response.data.data) {
          setOrders(response.data.data.purchases); 
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSellerHistory();
  }, [sellerid]);

  console.log(orders);

  return (
    <div className='orderS-main'>
      <hr/>
      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="orderS-flex"> 
            <div>
              {order.productid && order.productid.image1 && (
                <img className="orderS-img" src={`http://localhost:4030/${order.productid.image1[0].filename}`} alt="Product" />
              )}
            </div> 
            <div className='orderS-details'>
              {order.productid ? order.productid.productname : 'Product name not available'}
            </div>
            <div className='orderS-price'>
              {order.productid ? 'Rs. ' + order.productid.price : 'Price not available'}
            </div>
            <div className='orderS-rating'>
              <div className='orderS-rating-flex'>
                <h5>Buyer details</h5>
                <div>{order.userid ?  'Name : ' + order.userid.username : 'Not available'}</div>
                <div>{order.userid ?  'Email : ' + order.userid.email : 'Not available'}</div>
                <div>{order.userid ?  'Number : ' + order.userid.contact : 'Not available'}</div>
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
