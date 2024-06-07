import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BuyingprodUser.css';

function BuyingprodUser() {
  const uid = localStorage.getItem("uid");
  const { id } = useParams();

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [State, setState] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardName: '',cardNumber: '',
    expiryDate: '',
    cardCvv: '',
  });


  useEffect(() => {
    fetchAddress();
    fetchIndividualProduct();
  }, [id]);

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
console.log(cardDetails);
  const handlePaymentSubmit = () => {
    // Example of handling payment submission
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }
    if (!cardDetails.cardName || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cardCvv) {
      alert("Please fill in all card details.");
      return;
    }

    // Process the payment here
    axios.post(`http://localhost:3000/buyProduct/${uid}/${id}/${selectedAddress._id}`,cardDetails)
      .then(response => {
        setState(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    alert("Payment processed successfully!");
  };

  return (
    <div className='row buy-maindiv'>
      <div className='buying-main col-6'>
        <p className='section-header'>Saved Addresses</p>
        <div className='profU-buying-main col-12'>
          <ul className='address-list'>
            {savedAddresses.length > 0 ? (
              savedAddresses.map((addr, index) => (
                <li key={index} className='address-item'>
                  <input
                    type='radio'
                    name='address'
                    value={addr._id}
                    checked={selectedAddress?._id === addr._id}
                    onChange={handleAddressSelect}
                    className='address-radio'
                  />
                  <div className='address-summary'>
                    <p className='address-name'><strong>{addr.name}</strong></p>
                    <p className='address-city'>{addr.city}, {addr.state}</p>
                    <p className='address-details'>{addr.pin} - {addr.landmark}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>No saved addresses</p>
            )}
          </ul>
          <hr />
        </div>
      </div>
      <div className='buying-main col-3'>
        <div className='product-image-container'>
          {State.image1 && State.image1.filename && (
            <img className='buying-img' src={`http://localhost:3000/${State.image1.filename}`} alt="Product" />
          )}
        </div>
        <div className='product-details'>
          <p>{State.name}</p>
          <b>{'RS. ' + State.price}</b>
        </div>
      </div>
      <div className='buying-payment col-3'>
        <h4>Enter Card Details</h4>
        <input
          type='text'
          name='cardName'
          placeholder='Card holder name'
          value={cardDetails.cardName}
          onChange={handleCardDetailsChange}
          className='card-input'
        />
        <input
          type='number'
          name='cardNumber'
          placeholder='Card Number'
          value={cardDetails.cardNumber}
          onChange={handleCardDetailsChange}
          className='card-input'
        />
        <input
          type='date'
          name='expiryDate'
          placeholder='Expiry Date (MM/YY)'
          value={cardDetails.expiryDate}
          onChange={handleCardDetailsChange}
          className='card-input'
        />
        <input
          type='number'
          name='cardCvv'
          placeholder='CVV'
          value={cardDetails.cvv}
          onChange={handleCardDetailsChange}
          className='card-input'
        />
        <button onClick={handlePaymentSubmit} className='payment-btn'>Submit Payment</button>
      </div>
    </div>
  );
}

export default BuyingprodUser;
