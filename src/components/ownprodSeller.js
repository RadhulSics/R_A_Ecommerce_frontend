import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OwnprodSeller.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import edit from "../images/edit.png";

function OwnprodSeller() {
  const [state, setState] = useState([]);
  const sellerid = localStorage.getItem("sellerid");
  const [open, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // Fetch the products for the seller when the component loads
  useEffect(() => {
    axios
      .post(`http://localhost:4030/ownProducts/${sellerid}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openForm = (product) => {
    setEditData(product);
    setIsOpen(true);
  };

  const change = (e) => {
    const { name, value, files } = e.target;
    if (name === "productname" || name === "productbrand" || name === "material") {
      if (/\d/.test(value)) {
        alert(`${name.charAt(0).toUpperCase() + name.slice(1)} cannot contain numbers.`);
        return;
      }
    }
    
    if(e.target.name === "image1"){
        // handleImageUpload(e);
        setEditData({...editData,image1:e.target.files[0]});
    }
    else if(e.target.name === "image2"){
      // handleImageUpload(e);
      setEditData({...editData,image2:e.target.files[0]});
  }
  else if(e.target.name === "image3"){
    // handleImageUpload(e);
    setEditData({...editData,image3:e.target.files[0]});
  }
  else{
    setEditData({...editData,[e.target.name]:e.target.value});
    
  }
  };
  const productAdd = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in editData) {
      formData.append(key, editData[key]);
    }

    axios
      .post(`http://localhost:4030/ownProductsedit/${editData._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((rec) => {
        console.log(rec);
        alert("Updated successfully");
        setIsOpen(false);
        // Refresh the product list after update
        axios
          .post(`http://localhost:4030/ownProducts/${sellerid}`)
          .then((res) => {
            setState(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = (productId) => {
    axios
      .post(`http://localhost:4030/deleteProduct/${productId}`)
      .then((res) => {
        alert(res.data.msg);
        // Remove the deleted product from the state directly
        const updatedState = state.filter((product) => product._id !== productId);
        setState(updatedState);  // Update the state with the new product list
        setIsOpen(false); // Close the modal
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderImagePreview = (image) => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    } else if (image && image.filename) {
      return `http://localhost:4030/${image.filename}`;
    }
    return null;
  };

  return (
    <div>
      <div className="row ownS-main">
        {state.map((d) => (
          <div key={d.id} className="card col-2 ownS-col">
            <div className="ownS-container">
              <img
                className="card-img-top ownS-img"
                src={`http://localhost:4030/${d.image1[0].filename || ""}`}
                alt="image"
              />
              <div className="ownS-middle">
                <p>EDIT</p>
                <button className="ownS-edit-btn ownS-text" onClick={() => openForm(d)}>
                  <img className="ownS-edit-img" src={edit} alt="edit" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="ownS-name">
                {d.productname + " "}
                <hr />
                <div className="ownS-price">{"Rs. " + d.price + " "}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='ownS-main-bg'>
        {open && editData && (
          <div>
            <form onSubmit={productAdd}>
              <div className='ownS-main2'>
                <h3 className='ownS-sellerhead'>EDIT ITEM</h3>
                <table>
                  <tbody className="edit-product-flex2">
                    <tr>
                      <td><label className='ownS-sellerlabel'>Product name :</label></td>
                      <td><input className='ownS-sellerinput' type='text' name='productname' value={editData.productname} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Product brand :</label></td>
                      <td><input className='ownS-sellerinput' type='text' name='productbrand' value={editData.productbrand} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Quantity :</label></td>
                      <td><input className='ownS-sellerinput' type='number' name='quantity' value={editData.quantity} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Material :</label></td>
                      <td><input className='ownS-sellerinput' type='text' name='material' value={editData.material} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Specifications :</label></td>
                      <td><textarea className='ownS-sellerinput' rows={3} cols={30} name='specifications' value={editData.specifications} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Price :</label></td>
                      <td><input className='ownS-sellerinput' type='number' name='price' value={editData.price} onChange={change} required /></td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Gender :</label></td>
                      <td>
                        <select name='gender' value={editData.gender} onChange={change} required>
                          <option value='male'>MALE</option>
                          <option value='female'>FEMALE</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Category :</label></td>
                      <td>
                        <select name='category' value={editData.category} onChange={change}>
                          <option value={'Shirt'}>Shirt</option>
                          <option value={'Pant'}>Pant</option>
                          <option value={'Jacket'}>Jacket</option>
                          <option value={'Shoe'}>Shoe</option>
                          <option value={'Watch'}>Watch</option>
                          <option value={'Belt'}>Belt</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Size :</label></td>
                      <td>
                        <select name='size' value={editData.size} onChange={change}>
                          <option value='S'>S</option>
                          <option value='M'>M</option>
                          <option value='L'>L</option>
                          <option value='XL'>XL</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Photo 1 :</label></td>
                      <td>
                        <input className='ownS-sellerinput' type='file' name='image1' onChange={change} />
                        {editData.image1 && (
                          <img className='ownS-img-preview' src={renderImagePreview(editData.image1)} alt="preview" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Photo 2 :</label></td>
                      <td>
                        <input className='ownS-sellerinput' type='file' name='image2' onChange={change} />
                        {editData.image2 && (
                          <img className='ownS-img-preview' src={renderImagePreview(editData.image2)} alt="preview" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>Photo 3 :</label></td>
                      <td>
                        <input className='ownS-sellerinput' type='file' name='image3' onChange={change}  />
                        {editData.image3 && (
                          <img className='ownS-img-preview' src={renderImagePreview(editData.image3)} alt="preview" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><label className='ownS-sellerlabel'>DELETE :</label></td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => deleteProduct(editData._id)}>
                          DELETE
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><button className="btn btn-success ownS-sellerbtn">UPDATE</button></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default OwnprodSeller;
