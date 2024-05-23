import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartUser.css';

function CartUser() {
  const [Order, SetOrder] = useState([]);
  const uid = localStorage.getItem("uid");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    axios.post(`http://localhost:3000/viewCart/${uid}`)
      .then((rec) => {
        SetOrder(rec.data);
        calculateTotals(rec.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calculateTotals = (data) => {
    let totalItemsCount = data.length;
    let totalPriceAmount = 0;

    data.forEach((item) => {
      totalPriceAmount += item.pid.price;
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceAmount);
  };

  const removeCart = (id) => {
    axios.post(`http://localhost:3000/removeCart/${id}`)
      .then(() => {
        fetchCartItems(); // Refresh cart items after deletion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='cart-main'>
      {Order.map((a) => {
        return (
          <div className="cart-flex" key={a._id}>
            <div>
              <img className="cart-img" src={`http://localhost:3000/${a.pid.image1.filename}`} alt="product" />
            </div>
            <div className='cart-details'>
              {a.pid.name}
            </div>
            <div className='cart-price'>
              {'Rs. ' + a.pid.price }
            </div>
            <div className='cart-rating'>
              {'⭐'}
            </div>
            <div>
              <button className='cart-btn' onClick={() => removeCart(a._id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className='cart-final-details row'>
        <div className='col-4'>
          <h5>Total items: {totalItems}</h5>
          <h5>Total price: <b>{totalPrice}</b> rs</h5>
        </div>
        <div className='col-2'>
          <button className='cart-buy-btn'>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
