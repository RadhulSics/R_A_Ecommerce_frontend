import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartBuy.css';
import { useNavigate } from 'react-router-dom';

function CartBuy() {
  const [Order, SetOrder] = useState([]);
  const uid = localStorage.getItem("uid");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cardCvv: '',
  });
  const [State, setState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
    fetchAddress();
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

  const fetchAddress = () => {
    axios.post(`http://localhost:3000/showAddress/${uid}`)
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setSavedAddresses(response.data.data);
        } else {
          setSavedAddresses([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const calculateTotals = (data) => {
    let totalItemsCount = data.length;
    let totalPriceAmount = 0;

    data.forEach((item) => {
      totalPriceAmount += item.pid?.price || 0;
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceAmount);
  };

  const handleAddressSelect = (event) => {
    const addressId = event.target.value;
    const selected = savedAddresses.find(addr => addr._id === addressId);
    setSelectedAddress(selected);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = () => {
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }
    if (!cardDetails.cardName || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cardCvv) {
      alert("Please fill in all card details.");
      return;
    }
    if (cardDetails.cardNumber.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }
    if (cardDetails.cardCvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    axios.post(`http://localhost:3000/cartBuy/${uid}/${selectedAddress._id}`, cardDetails)
      .then(response => {
        setState(response.data);
        alert(response.data.msg);
        navigate('/OrderDetailsUser');
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data.msg);
      });
  };

  return (
    <div className='CartBuy-main'>
      {Order.map((a) => {
        return (
          <div className='CartBuy-mainbox' key={a._id}>
            <div className="CartBuy-flex">
              <div>
                <img
                  className="CartBuy-img"
                  src={a.pid?.image1?.filename ? `http://localhost:3000/${a.pid.image1.filename}` : 'default-image.jpg'}
                  alt={a.pid?.name || 'Default product'}
                />
              </div>
              <div className='CartBuy-details'>
                {a.pid?.name || 'Unknown Product'}
              </div>
              <div className='CartBuy-rating'>
                {a.pid?.brand || 'No Brand'}
              </div>
              <div className='CartBuy-price'>
                {'Rs. ' + (a.pid?.price || 'N/A')}
              </div>
            </div>
          </div>
        );
      })}

      <div className='CartBuy-buying-payment'>
        <div className='CartBuy-final-details row'>
          <div className='col-5'>
            <h5>Total items: {totalItems}</h5>
          </div>
          <div className='col-5'>
            <h5>Total price: <b>{totalPrice}</b> rs</h5>
          </div>
        </div>
        <hr/>
        <div className='CartBuy-address-box'>
          <h4>ADDRESS</h4>
          {savedAddresses.length > 0 ? (
            <div className='row'>
              {savedAddresses.map((addr, index) => (
                <div key={index} className='col-6'>
                  <li className='CartBuy-address-item'>
                    <input
                      type='radio'
                      name='address'
                      value={addr._id}
                      checked={selectedAddress?._id === addr._id}
                      onChange={handleAddressSelect}
                      className='CartBuy-address-radio'
                    />
                    <div>
                      <p className='CartBuy-address-name'><strong>{addr.name}</strong></p>
                      <p className='CartBuy-address-city'>{addr.city}, {addr.state}</p>
                      <p className='CartBuy-address-details'>{addr.pin} - {addr.landmark}</p>
                    </div>
                  </li>
                </div>
              ))}
            </div>
          ) : (
            <p>No saved addresses</p>
          )}
        </div>
        <hr/>
        <h4>Enter Card Details</h4>
        <input
          type='text'
          name='cardName'
          placeholder='Card holder name'
          value={cardDetails.cardName}
          onChange={handleCardDetailsChange}
          className='CartBuy-card-input'
        />
        <input
          type='number'
          name='cardNumber'
          placeholder='Card Number'
          value={cardDetails.cardNumber}
          onChange={handleCardDetailsChange}
          className='CartBuy-card-input'
        />
        <input
          type='date'
          name='expiryDate'
          placeholder='Expiry Date (MM/YY)'
          value={cardDetails.expiryDate}
          onChange={handleCardDetailsChange}
          className='CartBuy-card-input'
        />
        <input
          type='number'
          name='cardCvv'
          placeholder='CVV'
          value={cardDetails.cardCvv}
          onChange={handleCardDetailsChange}
          className='CartBuy-card-input'
        />
        <button onClick={handlePaymentSubmit} className='CartBuy-payment-btn'>Submit Payment</button>
      </div>
    </div>
  );
}

export default CartBuy;
