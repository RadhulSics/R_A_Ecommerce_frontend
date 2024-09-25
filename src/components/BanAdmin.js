import React, { useEffect, useState } from 'react';
import './BanAdmin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BanAdmin() {
  const [Userz, SetUserz] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4030/viewbanSeller')
    .then((res) => {
      console.log(res);
      SetUserz(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  
  const unban = (a) => {
    axios.post(`http://localhost:4030/unbanSeller/${a}`)
      .then((res) => {
        alert('Seller unbanned successfully');
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(Userz);

  return (
    <div className='ban-main'>
      {Userz.length > 0 ? (
      
     
        <div>
          {Userz.map((b) => {
            return (
              <div className='ban-flex' key={b._id}>
                <div>
                  <img className='ban-image' src={`http://localhost:4030/${b.image.filename}`} alt='seller' />
                </div>
                <div>
                  {'Name : ' + b.username}
                </div>
                <div>
                  {'Email : ' + b.email}
                </div>
                <div>
                  {'Number : ' + b.contact}
                </div>
                <div>
                  {'Gender : ' + b.gender}
                </div>
                <div>
                  <Link style={{ textDecoration: 'none' }} className='ban-button' to={`/OrderDetails/seller/${b._id}`}>Order details</Link>
                </div>
                <div>
                  <button className='ban-button' onClick={() => unban(b._id)}>UNBAN</button>
                </div>
              </div>
            );
          })}
        </div>
         ) : (
          <p>No sellers banned</p>
      )}
    </div>
  );
}

export default BanAdmin;
