import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartUser.css';
import { useNavigate } from 'react-router-dom';

function CartUser() {
  const [Order, SetOrder] = useState([]);
  const uid = localStorage.getItem("uid");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [invalidItem, setInvalidItem] = useState(false);

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
    let hasInvalidItems = false;

    data.forEach((item) => {
      if (item.pid?.price) {
        totalPriceAmount += item.pid.price;
      } else {
        hasInvalidItems = true;
      }
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceAmount);
    setInvalidItem(hasInvalidItems);
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

  const cartBuy = () => {
    if (totalItems > 0 && !invalidItem) {
      navigate('/cartBuy');
    } else if (invalidItem) {
      alert('Remove invalid items from cart');
    } else {
      alert('No items in cart');
    }
  };

  return (
    <div className='cart-main'>
      {Order.map((a) => (
        <div className="cart-flex" key={a._id}>
          <div>
            <img
              className="cart-img"
              src={a.pid?.image1?.filename ? `http://localhost:3000/${a.pid.image1.filename}` : 'default-image.jpg'}
              alt={a.pid?.name || 'product'}
              onError={() => setInvalidItem(true)}
            />
          </div>
          <div className='cart-details'>
            {a.pid?.name || 'Unknown Product'}
          </div>
          <div className='cart-rating'>
            {a.pid?.brand || 'No Brand'}
          </div>
          <div className='cart-price'>
            {'Rs. ' + (a.pid?.price || 'N/A')}
          </div>
          <div>
            <button className='cart-btn' onClick={() => removeCart(a._id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='cart-final-details row'>
        <div className='col-4'>
          <h5>Total items: {totalItems}</h5>
          <h5>Total price: <b>{totalPrice}</b> rs</h5>
        </div>
        <div className='col-2'>
          <button className='cart-buy-btn' onClick={cartBuy}>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
