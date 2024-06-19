import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import '../components/SellerSearch.css'

function SellerSearch() {
  const [state,setState]=useState([]);
  const data = useParams()
  console.log("2nd ",data);
 
  useEffect(()=>{
      axios.post(`http://localhost:3000/userSearch/${data.data}`)
      .then((res)=>{
       console.log('successful');
       console.log(res);
       setState(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])
  console.log(state)

  return (
    <div className='sellerSearch-bg'>
        
        <div className='row sellerSearch-main'>
            {state.map((c)=>{
                return(
                 
            <div className="card col-2 sellerSearch-col">
               <Link to={`/IndProductsSeller/${c._id}`} className='Link-decoration' >
           <img className="card-img-top sellerSearch-img" src={`http://localhost:3000/${c.image1.filename}`} alt='image' />
           
           <div className="card-body">
            
            <div className='sellerSearch-name'>
            <hr/>
            {c.name+" "}
            <div className='sellerSearch-price'>
            <b>{'Rs : '+c.price+" "}</b>
            </div> 
            </div> 
           
            
            </div> 
            </Link>
          </div>
          
                )

            })}
        </div>
      
    </div>
  )
}
export default SellerSearch