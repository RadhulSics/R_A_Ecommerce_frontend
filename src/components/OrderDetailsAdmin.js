import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './OrderDetailsAdmin.css';

function OrderDetailsAdmin() {
  const [orders, setOrders] = useState([]);
  const { id, type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (type === 'seller') {
          response = await axios.post(`http://localhost:3000/sellerHistory/${id}`);
          if (response.data && response.data.data) {
            setOrders(response.data.data.purchases); 
          }
        } else {
          response = await axios.post(`http://localhost:3000/viewHistory/${id}`);
          if (response.data && response.data.data) {
            setOrders(response.data.data);
          }
        }
      } catch (err) {
        console.log(err);
        // Handle error state or display an error message
      }
    };

    fetchData();
  }, [id, type]);

  console.log(orders);

  return (
    <div className="orderD-main">
      <hr />
      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order, index) => (
          <Link key={index} to='/OrderDetails' className="orderD-flex">
            <div>
              {order.pid && order.pid.image1 && (
                <img className="orderD-img" src={`http://localhost:3000/${order.pid.image1.filename}`} alt="Order" />
              )}
            </div>
            <div className='orderD-details'>
              {order.pid ? order.pid.name : 'Product name not available'}
            </div>
            <div className='orderD-price'>
              {order.pid ? 'Rs. ' + order.pid.price : 'Price not available'}
            </div>
            {type === 'seller' ? (
              <>
                <div>
                  <h5>Buyer details</h5>
                  <div>{order.uid ? 'Name : ' + order.uid.name : 'not available'}</div>
                  <div>{order.uid ? 'Email : ' + order.uid.email : 'not available'}</div>
                  <div>{order.uid ? 'Number : ' + order.uid.number : 'not available'}</div>
                </div>
                <div>
                  <h5>Buyer Address</h5>
                  <div>{order.aid ? 'Name : ' + order.aid.name : 'not available'}</div>
                  <div>{order.aid ? 'Number : ' + order.aid.number : 'not available'}</div>
                  <div>{order.aid ? 'Pin code : ' + order.aid.pin : 'not available'}</div>
                  <div>{order.aid ? 'State : ' + order.aid.state : 'not available'}</div>
                  <div>{order.aid ? 'City : ' + order.aid.city : 'not available'}</div>
                </div>
              </>
            ) : (
              <div>
                <h5>Seller details</h5>
                <div>{order.pid && order.pid.sid ? 'Name : ' + order.pid.sid.name : 'not available'}</div>
                <div>{order.pid && order.pid.sid ? 'Email : ' + order.pid.sid.email : 'not available'}</div>
                <div>{order.pid && order.pid.sid ? 'Number : ' + order.pid.sid.number : 'not available'}</div>
              </div>
            )}
            <div className='orderD-date'>
              <p>Purchased date: <b>{new Date(order.date).toLocaleDateString()}</b></p>
            </div>
          </Link>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default OrderDetailsAdmin;
