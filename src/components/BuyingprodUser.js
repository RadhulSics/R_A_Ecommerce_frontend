import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BuyingprodUser.css';

function BuyingprodUser() {
  const uid = localStorage.getItem("uid");
  const { id } = useParams();
  const navigate = useNavigate();

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [State, setState] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cardCvv: '',
  });

  useEffect(() => {
    fetchAddress();
    fetchIndividualProduct();
  }, [id, uid]);

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

  const fetchIndividualProduct = () => {
    axios.post(`http://localhost:3000/viewIndividualproducts/${id}`)
      .then(response => {
        setState(response.data);
      })
      .catch(err => {
        console.log(err);
      });
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

    axios.post(`http://localhost:3000/buyProduct/${uid}/${id}/${selectedAddress._id}/${State.sid}`, cardDetails)
      .then(response => {
        setState(response.data);
        alert(response.data.msg);
        navigate(-1);
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data.msg);
      });
  };

  return (
    <div className='buy-maindiv'>
      <div className='buying-main'>
      <div className='Buy-buying-payment'>
        <div className='Buy-address-box'>
          <h4>ADDRESS</h4>
          {savedAddresses.length > 0 ? (
            <div className='row'>
              {savedAddresses.map((addr, index) => (
                <div key={index} className='col-6'>
                  <li className='Buy-address-item'>
                    <input
                      type='radio'
                      name='address'
                      value={addr._id}
                      checked={selectedAddress?._id === addr._id}
                      onChange={handleAddressSelect}
                      className='Buy-address-radio'
                    />
                    <div>
                      <p className='Buy-address-name'><strong>{addr.name}</strong></p>
                      <p className='Buy-address-city'>{addr.city}, {addr.state}</p>
                      <p className='Buy-address-details'>{addr.pin} - {addr.landmark}</p>
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
          className='Buy-card-input'
        />
        <input
          type='number'
          name='cardNumber'
          placeholder='Card Number'
          value={cardDetails.cardNumber}
          onChange={handleCardDetailsChange}
          className='Buy-card-input'
        />
        <input
          type='date'
          name='expiryDate'
          placeholder='Expiry Date (MM/YY)'
          value={cardDetails.expiryDate}
          onChange={handleCardDetailsChange}
          className='Buy-card-input'
        />
        <input
          type='number'
          name='cardCvv'
          placeholder='CVV'
          value={cardDetails.cardCvv}
          onChange={handleCardDetailsChange}
          className='Buy-card-input'
        />
        <button onClick={handlePaymentSubmit} className='CartBuy-payment-btn'>Submit Payment</button>
      </div>

        <div className='buy-image-container'>
          {State.image1 && State.image1.filename && (
            <img className='buying-img' src={`http://localhost:3000/${State.image1.filename}`} alt="Product" />
          )}
          <div className='product-details'>
            <p>{State.name}</p>
            <b>{'RS. ' + State.price}</b>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default BuyingprodUser;
