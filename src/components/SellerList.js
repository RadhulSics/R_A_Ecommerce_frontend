import React, { useEffect, useState } from 'react';
import './SellerList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SellerList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchAlluser()
  }, []);

   const fetchAlluser =()=>{
    axios.post('http://localhost:3000/allSeller')
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   }

  const banButton = (a)=>{
    axios.post(`http://localhost:3000/banSeller/${a}`)
    .then((res) => {
      alert('User banned')
      fetchAlluser()
    })
    .catch((err) => {
      console.log(err);
    });
  }

  console.log(state);
  return (
    <div className='SellerList-main'>
      <div>
        {state.length > 0 ? state.map((b) => {
          return (
            <div className='SellerList-flex' key={b._id}>
              <div>
                <img className='SellerList-image' src={`http://localhost:3000/${b.image.filename}`} alt='profile' />
              </div>
              <div>
                {'Name : ' + b.name}
              </div>
              <div>
                {'Email : ' + b.email}
              </div>
              <div>
                {'Number : ' + b.number}
              </div>
              <div>
                {'Gender : ' + b.gender}
              </div>
              {/* <div>
                <label>Reason :</label>
                <select className='SellerList-select-reason'>
                  <option className='SellerList-opt-select'></option>
                  <option>spam</option>
                  <option>poor product quality</option>
                  <option>damaged products</option>
                  <option>other</option>
                </select>
              </div> */}
              <div>
                <Link className='SellerList-view-button'  to={`/OrderDetails/seller/${b._id}`}>Order details</Link>
              </div>
              <div>
                <button className='SellerList-banbutton' onClick={()=>banButton(b._id)}>BAN</button>
              </div>
            </div>
          )
        }) : <div>No active sellers found</div>}
      </div>
    </div>
  )
}

export default SellerList;
