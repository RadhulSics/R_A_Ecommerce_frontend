import React, { useState } from 'react';
import './login.css';
import './StyleR.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [data, setData] = useState({ username: '', email: '', contact: '', image: 'null', password: '', gender: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const change = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setData({ ...data, image: files[0] });
    } else {
      setData({ ...data, [name]: value });
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
      return `${fieldName} must be 10 digits`;
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
      return errorsPassword.join(", ");
    }
    return '';
  };

  const signup = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    // Validate fields
    errors.username = validateField('Username', data.username);
    errors.email = validateField('Email', data.email);
    errors.contact = validateNumber('Phone number', data.contact);
    errors.password = validatePassword('Password', data.password);

    // Check for any errors
    Object.keys(errors).forEach((key) => {
      if (errors[key]) {
        formIsValid = false;
      }
    });

    setErrors(errors);

    if (formIsValid) {
      console.log("data", data);
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('email', data.email);
      formData.append('contact', data.contact);
      formData.append('password', data.password);
      formData.append('gender', data.gender);
      formData.append('image', data.image);

      axios.post(`http://localhost:4030/registercustomer`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
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
          {errors.username && <div className="text-danger">{errors.username}</div>}

          <input className='reg-input reg-number' type='number' placeholder='Phone number...' value={data.contact} name='contact' onChange={change} />
          {errors.contact && <div className="text-danger">{errors.contact}</div>}

          <input className='reg-input' type='email' placeholder='Email...' value={data.email} name='email' onChange={change} />
          {errors.email && <div className="text-danger">{errors.email}</div>}

          <input className='reg-input' type='password' placeholder='Password...' value={data.password} name='password' onChange={change} />
          {errors.password && <div className="text-danger">{errors.password}</div>}

          <div>
            <label className='reg-label'>Male</label>
            <input type='radio' name='gender' value={'male'} onChange={change} />
            <label className='reg-label'>Female</label>
            <input type='radio' name='gender' value={'female'} onChange={change} />
          </div>
          <div className='reg-imageupload'>
            <label className='reg-imageupload-label'>Upload image:</label>
            <input type='file' name="image" onChange={change} required />
          </div>

          <div>
            <button type='submit' className='reg-button'>REGISTER</button>
          </div>
        </div>
        <div>
          <p className='reg-loginText'>Already have an account?</p>
          <Link to='/Customerlogin'><h3 className='reg-login-btn'>LOG IN</h3></Link>
        </div>
      </form>
    </div>
  );
}

export default Registration;
