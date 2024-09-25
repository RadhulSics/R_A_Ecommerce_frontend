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
          response = await axios.post(`http://localhost:4030/sellerHistory/${id}`);
          if (response.data && response.data.data) {
            setOrders(response.data.data.purchases); 
          }
        } else {
          response = await axios.post(`http://localhost:4030/viewHistory/${id}`);
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
          <div key={index} to='/OrderDetails' className="orderD-flex">
            <div>
              {order.productid && order.productid.image1 && (
                <img className="orderD-img" src={`http://localhost:4030/${order.productid.image1[0].filename}`} alt="Order" />
              )}
            </div>
            <div className='orderD-details'>
              {order.productid ? order.productid.productname : 'Product name not available'}
            </div>
            <div className='orderD-price'>
              {order.productid ? 'Rs. ' + order.productid.price : 'Price not available'}
            </div>
            {type === 'seller' ? (
              <>
                <div>
                  <h5>Buyer details</h5>
                  <div>{order.userid ? 'Name : ' + order.userid.username : 'not available'}</div>
                  <div>{order.userid ? 'Email : ' + order.userid.email : 'not available'}</div>
                  <div>{order.userid ? 'Number : ' + order.userid.contact : 'not available'}</div>
                </div>
                <div>
                  <h5>Buyer Address</h5>
                  <div>{order.aid ? 'Name : ' + order.aid.name : 'not available'}</div>
                  <div>{order.aid ? 'Pin code : ' + order.aid.pin : 'not available'}</div>
                  <div>{order.aid ? 'State : ' + order.aid.state : 'not available'}</div>
                  <div>{order.aid ? 'City : ' + order.aid.city : 'not available'}</div>
                </div>
              </>
            ) : (
              <div>
                <h5>Seller details</h5>
                <div>{order.productid && order.productid.sellerid ? 'Name : ' + order.productid.sellerid.username : 'not available'}</div>
                <div>{order.productid && order.productid.sellerid ? 'Email : ' + order.productid.sellerid.email : 'not available'}</div>
                <div>{order.productid && order.productid.sellerid ? 'Number : ' + order.productid.sellerid.contact : 'not available'}</div>
              </div>
            )}
            <div className='orderD-date'>
              <p>Purchased date: <b>{new Date(order.date).toLocaleDateString()}</b></p>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default OrderDetailsAdmin;
