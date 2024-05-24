import React, { useEffect, useState } from 'react';
import './SellerApproval.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

function SellerApproval() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchPendingSellers();
  }, []);

  const fetchPendingSellers = () => {
    axios.post('http://localhost:3000/pendingSeller')
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const accept = (id) => {
    axios.post(`http://localhost:3000/approveSeller/${id}`)
      .then(res => {
        console.log('Approved successfully');
        fetchPendingSellers(); // Re-fetch the pending sellers after approval
      })
      .catch(err => {
        console.log(err);
      });
  };

  const decline =(id)=>{
    axios.post(`http://localhost:3000/declineSeller/${id}`)
    .then(res => {
      console.log('Declined successfully');
      fetchPendingSellers(); // Re-fetch the pending sellers after approval
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='SellerApproval-main'>
      <div className='row SellerApproval-main'>
        {state.length > 0 ? state.map((a) => {
          return (
            <div className="card SellerApproval-card col-4" key={a._id}>
              <img src={`http://localhost:3000/${a.image?.filename}`} alt='profile' className="card-img-top SellerApproval-img" />
              <div className="card-body">
                <h4 className='SellerApproval-name'>{a.name}</h4>
                <hr />
                <p className="card-text SellerApproval-price">{'Email : ' + a.email}</p>
                <hr />
                <p className='SellerApproval-det'>{'Gender : ' + a.gender}</p>
                <p className='SellerApproval-det'>{'Number : ' + a.number}</p>
                <hr />
                <div className='SellerApproval-btnflex'>
                  <div>
                    <button className='SellerApproval-accept' type='button' onClick={() => accept(a._id)}>ACCEPT</button>
                  </div>
                  <div>
                    <button className='SellerApproval-decline' type='button' onClick={()=>decline(a._id)}>DECLINE</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }) : <div>No pending sellers found</div>}
      </div>
    </div>
  );
}

export default SellerApproval;
