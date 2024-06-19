import React, { useEffect, useState } from 'react';
import './BanAdmin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BanAdmin() {
  const [Userz, SetUserz] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.post('http://localhost:3000/viewbanSeller')
      .then((res) => {
        SetUserz(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unban = (a) => {
    axios.post(`http://localhost:3000/unbanSeller/${a}`)
      .then((res) => {
        alert('Seller unbanned successfully');
        fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(Userz);

  return (
    <div className='ban-main'>
      {Userz.length === 0 ? (
        <p>No sellers banned</p>
      ) : (
        <div>
          {Userz.map((b) => {
            return (
              <div className='ban-flex' key={b._id}>
                <div>
                  <img className='ban-image' src={`http://localhost:3000/${b.image.filename}`} alt='seller' />
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
      )}
    </div>
  );
}

export default BanAdmin;
