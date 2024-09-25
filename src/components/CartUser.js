import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartUser.css';
import { useNavigate } from 'react-router-dom';

function CartUser() {
  const [Order, SetOrder] = useState([]);
  const userid = localStorage.getItem("userid");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [invalidItem, setInvalidItem] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    axios.post(`http://localhost:4030/viewCart/${userid}`)
      .then((rec) => {
        console.log(rec);
        const data = rec.data;
        if (Array.isArray(data)) {
          SetOrder(data); // Only set if it's an array
          calculateTotals(data);
        } else {
          console.log('Expected an array, but received:', data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const calculateTotals = (data) => {
    let totalItemsCount = data.length;
    let totalPriceAmount = 0;
    let hasInvalidItems = false;

    data.forEach((item) => {
      if (item.productid?.price) {
        totalPriceAmount += item.productid.price;
      } else {
        hasInvalidItems = true;
      }
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceAmount);
    setInvalidItem(hasInvalidItems);
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
  

  const removeCart = (id) => {
    axios.post(`http://localhost:4030/removeCart/${id}`)
      .then((res) => {
        console.log(res);
        const updatedOrder = Order.filter(item => item._id !== id); // Filter the removed item
        SetOrder(updatedOrder); // Update state with filtered items
        calculateTotals(updatedOrder); // Recalculate totals after item removal
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  console.log(Order)

  return(
    <div className='cart-main'>
     
     {Order.map((a) => (
  <div className="cart-flex" key={a._id}>
    <div>
      {a.productid?.image1 && a.productid.image1[0] ? (
        <img className="cart-img" src={`http://localhost:4030/${a.productid.image1[0].filename}`} alt="" />
      ) : (
        <p>No image available</p>
      )}
    </div>
    <div className='cart-details'>
      {a.productid?.productname || 'No product name available'}
    </div>
    <div className='cart-rating'>
      {a.productid?.productbrand || 'No brand available'}
    </div>
    <div className='cart-price'>
      {'Rs : ' + (a.productid?.price || 'Price not available') + " "}
    </div>
    <div>
      <button className='cart-btn' onClick={() => removeCart(a._id)}>Remove</button>
    </div>
  </div>
))}

    
      <div className='cart-final-details row'>
      <div className='col-4'>
      <h5>Total items: {totalItems} </h5>
      <h5>Total price: <b>{totalPrice}</b> rs</h5>

        </div>
        <div className='col-2'>
        <button className='cart-buy-btn'onClick={cartBuy} >BUY</button>
        </div>



      </div>



    </div>





  )
  
 
}

export default CartUser;
