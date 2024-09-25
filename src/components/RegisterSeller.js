import React, { useState } from 'react';
import './login.css';
import './StyleR.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterSeller() {
  const [data, SetData] = useState({ username: '', email: '', contact: '', image: null, password: '', gender: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const change = (b) => {
    const { name, value, files } = b.target;

    if (name === 'image') {
      SetData({ ...data, image: files[0] });
    } else {
      SetData({ ...data, [name]: value });
    }
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  };

  const validateNumber = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (value.toString().length !== 10) {
      return `${fieldName} must be 10 digits long`;
    }
    return '';
  };

  const validatePassword = (fieldName, value) => {
    let errorsPassword = [];
    if (!value.trim()) {
      errorsPassword.push(`${fieldName} is required`);
    }
    if (value.length < 8) {
      errorsPassword.push(`must be at least 8 characters long`);
    }
    if (value.search(/[a-z]/) < 0) {
      errorsPassword.push(`must contain a lowercase letter`);
    }
    if (value.search(/[A-Z]/) < 0) {
      errorsPassword.push(`must contain an uppercase letter`);
    }
    if (value.search(/[0-9]/) < 0) {
      errorsPassword.push(`must contain a number`);
    }
    if (errorsPassword.length > 0) {
      return errorsPassword.join(', ');
    }
    return '';
  };

  const signup = (a) => {
    a.preventDefault();
    let errors = {};
    let formIsValid = true;

    // Validate each field
    errors.username = validateField('Username', data.username);
    errors.email = validateField('Email', data.email);
    errors.contact = validateNumber('Phone number', data.contact);
    errors.password = validatePassword('Password', data.password);

    // Update state with errors
    setErrors(errors);

    // Check if any errors exist
    for (let key in errors) {
      if (errors[key]) {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      console.log("data", data);

      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('email', data.email);
      formData.append('contact', data.contact);
      formData.append('image', data.image);
      formData.append('password', data.password);
      formData.append('gender', data.gender);

      axios.post(`http://localhost:4030/registerseller`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((rec) => {
          alert('Registration successful');
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className='reg-main'>
      <form onSubmit={signup} className='reg-box'>
        <div className='reg-submain border border-dark rounded-4'>
          <h2 className='reg-title'>SIGN UP</h2>

          <input className='reg-input' type='text' placeholder='Username...' value={data.username} name='username' onChange={change} />
          {errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}

          <input className='reg-input reg-number' type='number' placeholder='Phone number...' value={data.contact} name='contact' onChange={change} />
          {errors.contact && (
            <div className="text-danger ">{errors.contact}</div>
          )}

          <input className='reg-input' type='email' placeholder='Email...' value={data.email} name='email' onChange={change} />
          {errors.email && (
            <div className="text-danger ">{errors.email}</div>
          )}

          <input className='reg-input' type='password' placeholder='Password...' value={data.password} name='password' onChange={change} />
          {errors.password && (
            <div className="text-danger ">{errors.password}</div>
          )}

          <div>
            <label className='reg-label'>Male</label>
            <input type='radio' name='gender' value={'male'} onChange={change} />
            <label className='reg-label'>Female</label>
            <input type='radio' name='gender' value={'female'} onChange={change} />
          </div>

          <div className='reg-imageupload'>
            <label className='reg-imageupload-label'>Upload image:</label>
            <input type='file' name="image" onChange={change} />
          </div>

          <div>
            <button type='submit' className='reg-button'>REGISTER</button>
          </div>

        </div>
        <div>
          <p className='reg-loginText'>Already have an account?</p>
          <Link to='/Sellerlogin'><h3 className='reg-login-btn'>LOG IN</h3></Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterSeller;
