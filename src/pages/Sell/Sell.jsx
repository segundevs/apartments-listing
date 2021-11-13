import React, { useState } from 'react';
import axios from 'axios';
import {useAuth} from '../../contexts/authContext';
import { useData } from '../../contexts/dataContext';
import AuthError from '../../components/AuthError/AuthError';
import ButtonLoader from '../../components/ButtonLoader';

import {storage, auth} from '../../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';


import './sell.style.scss';

const Sell = () => {
  const { user } = useAuth();
  const { getData } = useData();

  const [askingPrice, setAskingPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garage, setGarage] = useState('');
  const [description, setDescription] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('bungalow');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadErr, setUploadErr] = useState('');

  //File Upload
  const handleFile = (e) => {
    const file = e.target.files[0]; 
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(progress)
  }, 
  (error) => {
    setUploadErr(error.message)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref)
    .then((downloadURL) => {
      setImageUrl(downloadURL)
    });
  }
);
}


  const postData = async() => {
    const token = await auth.currentUser.getIdToken();
    setLoading(true)
    try {
      await axios.post('http://localhost:8080/api/apartments', {
        username: user.displayName,
        price: askingPrice,
        bedrooms,
        bathrooms,
        garage,
        description,
        squareFeet,
        address,
        location,
        type,
        imageUrl,
      }, {headers: {
        'Authorization': `Bearer ${token}`
      }})
      setLoading(false)
    } catch (err) {
      setUploadErr(err.message)
      setLoading(false)
    }    
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postData()
    await getData()
  };

  return (
    <React.Fragment>
      <h2 className="sell-header">Upload an apartment for sale</h2>
      {uploadErr && <AuthError component={uploadErr}/>}
      <form className="sell__container" onSubmit={handleSubmit}>
        <div className="input__container">
          <label>Realtor</label>
          <input type="text" value={user && user.displayName} disabled/>
        </div>

        <div className="input__container">
          <label>Asking Price</label>
          <input type="number" value={askingPrice} onChange={(e) => setAskingPrice(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Size in square feet</label>
          <input type="number" value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Property Type</label>
          <select className="type__select" value={type} onChange={(e)=>setType(e.target.value)} required>
            <option value="bungalow">Bungalow</option>
            <option value="flat">Flat</option>
            <option value="duplex">Duplex</option>
            <option value="terrace">Terrace</option>
            <option value="semi-detached">Semi-detached</option>
            <option value="detached">Detached</option>
            <option value="maisonette">Maisonette</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>

        <div className="input__container">
          <label>Number of bedrooms</label>
          <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Number of bathrooms</label>
          <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Garage</label>
          <input type="number" value={garage} onChange={(e) => setGarage(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required placeholder="Please enter the city property is located"/>
        </div>

        <div className="input__container">
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
        </div>

        <div className="input__container">
          <label>Description</label>
          <textarea cols="20" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div> 

        <div className="input__container">
          <label>Apartment photo</label>
          <input type="file" onChange={handleFile}/>
          <div className="progress-bar" style={{width: `${progress}%`}}>{`${Math.round(progress)}%`}</div>
        </div>

      <button type="submit" className="upload-btn">{loading? <ButtonLoader /> : 'Submit'}</button>
      </form>
    </React.Fragment>
  );
}

export default Sell

