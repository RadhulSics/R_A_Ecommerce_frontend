import React, { useState } from 'react';
import './login.css';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [data, setData] = useState({ name: '', email: '', number: '', password: '', image: 'null', gender: '' });
  const [userType, setUserType] = useState('user');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const change = (b) => {
    const { name, value, files } = b.target;

    if (name === 'image') {
      setData({ ...data, image: files[0] });
    } else if (name === 'usertype') {
      setUserType(value);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const validate = () => {
    let errors = {};

    if (!/^\d{10}$/.test(data.number)) {
      errors.number = 'Mobile number must be 10 digits';
    }

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(data.password)) {
      errors.password = 'Password must be at least 6 characters long and contain at least one special character and one number';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const signup = (a) => {
    a.preventDefault();

    if (!validate()) {
      return;
    }

    const postData = userType === 'user' ? 'newuser' : 'newseller';

    axios
      .post(`http://localhost:3000/${postData}`, data, {
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
  };

  return (
    <div className='reg-main-bg'>
      <div className='reg-main'>
        <form onSubmit={signup}>
          <div className='row reg-oldUser'>
            <p className='col-9 reg-loginText'>Already have an account?</p>
            <button className='col-3 reg-login'>
              <Link className='Link-decoration' to='/login'>
                LOG IN
              </Link>
            </button>
          </div>

          <div className='reg-submain'>
            <h2 className='reg-title'>SIGN UP</h2>
            <div>
              <label className='reg-label'>User</label>
              <input type='radio' name='usertype' value={'user'} checked={userType === 'user'} onChange={change} />
              <label className='reg-label'>Seller</label>
              <input type='radio' name='usertype' value={'seller'} checked={userType === 'seller'} onChange={change} />
            </div>

            <input className='reg-input' type='text' placeholder='Username...' value={data.name} name='name' onChange={change} />

            <input
              className='reg-input reg-number'
              type='number'
              placeholder='Phone number...'
              value={data.number}
              name='number'
              onChange={change}
            />
            {errors.number && <div className='error' style={{ color: 'red' }}>{errors.number}</div>}

            <input className='reg-input' type='email' placeholder='Email...' value={data.email} name='email' onChange={change} />

            <input
              className='reg-input'
              type='password'
              placeholder='Password...'
              value={data.password}
              name='password'
              onChange={change}
            />
            {errors.password && <div className='error' style={{ color: 'red' }}>{errors.password}</div>}

            <div>
              <label className='reg-label'>Male</label>
              <input type='radio' name='gender' value={'male'} onChange={change} />
              <label className='reg-label'>Female</label>
              <input type='radio' name='gender' value={'female'} onChange={change} />
            </div>
            <div className='reg-imageupload-box'>
              <label className='reg-imageupload-label'>Upload image :</label>
              <input type='file' name='image' onChange={change} required />
            </div>

            <div>
              <button type='submit' className='reg-button'>
                REGISTER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
