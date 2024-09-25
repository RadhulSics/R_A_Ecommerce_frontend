import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FullproductsUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function FullproductsUser() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:4030/viewallproducts')
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(data)

   
    return (
        <div className='row fullU-main'>
            {data.length > 0 ? (
                data.map((e) => (
                    <div className="card col-2 fullU-col">
                        <Link to={`/IndProductsUser/${e._id}`} className='Link-decoration' >
                         <img className="card-img-top fullU-img" src={`http://localhost:4030/${e.image1[0].filename}`}alt='image' />
                         <div className="card-body">
                         <div className='fullU-name'>
                         {e.productname}

                         <div className='fullU-price'>
                         <b>{'Rs : '+e.price+" "}</b>
                         </div>
                            </div>





                         </div>
                         </Link>
                       
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}
        
    
export default FullproductsUser;
