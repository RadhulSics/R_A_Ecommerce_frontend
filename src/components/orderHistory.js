import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './login.css'

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
      axios.post(`http://localhost:4030/viewHistory/${userid}`)
          .then((response) => {
              setOrders(response.data.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

  console.log( orders);


  return (
    <div className='orderH-main'>
            {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((a, index) => (
                    <div key={index} className="orderH-flex">
                        <div>
                            <img className="orderH-img" src={`http://localhost:4030/${a.productid.image1[0].filename}`}/>
                           
                        </div>
                        <div className='orderH-details'>
                            {a.productid?.productname || 'Unknown Product'}
                        </div>
                        <div className='orderH-price'>
                            {a.productid?.productbrand || 'No Brand'}
                        </div>
                        <div className='orderH-price'>
                            {'Rs. ' + (a.productid?.price || 'N/A')}
                        </div>
                        <div>
                            <h5>Address</h5>
                            <div>{a.aid ? 'Name: ' + a.aid.name : 'Not available'}</div>
                            <div>{a.aid ? 'Pin code: ' + a.aid.pin : 'Not available'}</div>
                            <div>{a.aid ? 'State: ' + a.aid.state : 'Not available'}</div>
                            <div>{a.aid ? 'City: ' + a.aid.city : 'Not available'}</div>
                        </div>
                        <div className='orderH-date'>
                            <p>Ordered date: <b>{a.date ? new Date(a.date).toLocaleDateString() : 'Unknown'}</b></p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}

export default OrderHistory