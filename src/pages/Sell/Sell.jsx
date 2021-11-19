import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/authContext';
import { useData } from '../../contexts/dataContext';
import AuthError from '../../components/AuthError/AuthError';
import ButtonLoader from '../../components/ButtonLoader';
import axios from 'axios';
import {storage, auth} from '../../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import './sell.style.scss';

const Sell = () => {
  //Get the current id of the clicked item
  const id = window.location.href.split('/')[4];
  const history = useHistory();
  const { user } = useAuth();
  const { getData, data, url } = useData();

  //Find the item to be edited from all listings
  const edit = data.find(res => res._id === id);

  const [listingData, setListingData] = useState({
    price: '', bedrooms: '', bathrooms: '', garage: '', description: '', size: '', address: '', location: '', type: 'bungalow', progress: ''
  })
  
  useEffect(() => {
    if(id){
      setListingData(edit)
    }
  }, [edit, id])

  const [imageUrl, setImageUrl] = useState(edit? edit.imageUrl : '');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadErr, setUploadErr] = useState('');

  //Upload file to firebase and get the download url
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

//Upload a listing to the database
  const postData = async() => {
    const token = await auth.currentUser.getIdToken();
    setLoading(true)
    try {
      await axios.post(url, {...listingData, username: user.displayName, imageUrl}, 
      {headers: {
        'Authorization': `Bearer ${token}`
      }})
      setLoading(false)
      setUploadErr('')
    } catch (err) {
      setUploadErr(err.message)
      setLoading(false)
    }    
    }
  

  //Edit listing and patch it in the database
  const postEdit = async() => {
    const token = await auth.currentUser.getIdToken();
    setLoading(true)
    try {
      await axios.patch(`${url}/${id}`, {...listingData, username: user.displayName, imageUrl}, 
        {headers: {
        'Authorization': `Bearer ${token}`
      }})
      setLoading(false)
      setUploadErr('')
    } catch (err) {
      setUploadErr(err.message)
      setLoading(false)
    }    
  }


  //If there's an Id, call the edit post function else call post a new data
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(id) {
      await postEdit()
    }else {
      await postData()
    }

    history.push('/buy')
    await getData()
  };

  return (
    <React.Fragment>
      <h2 className="sell-header">{id ? 'Edit and update your listing' : 'Upload an apartment listing'}</h2>
      {uploadErr && <AuthError component={uploadErr}/>}
      <form className="sell__container" onSubmit={handleSubmit}>
        <div className="input__container">
          <label>Realtor</label>
          <input type="text" value={user && user.displayName} disabled className="username"/>
        </div>

        <div className="input__container">
          <label>Asking Price</label>
          <input type="number" value={listingData.price} onChange={(e) => setListingData({...listingData, price: e.target.value})} required placeholder="Enter your asking price"/>
        </div>

        <div className="input__container">
          <label>Size in square feet</label>
          <input type="number" value={listingData.size} onChange={(e) => setListingData({...listingData, size: e.target.value})} required placeholder="Enter size of property in square feet"/>
        </div>

        <div className="input__container">
          <label>Property Type</label>
          <select className="type__select" value={listingData.type} onChange={(e)=>setListingData({...listingData, type: e.target.value})} required>
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
          <input type="number" value={listingData.bedrooms} onChange={(e) => setListingData({...listingData, bedrooms: e.target.value})} required placeholder="Enter number of bedrooms"/>
        </div>

        <div className="input__container">
          <label>Number of bathrooms</label>
          <input type="number" value={listingData.bathrooms} onChange={(e) => setListingData({...listingData, bathrooms: e.target.value})} required placeholder="Enter number of bathrooms"/>
        </div>

        <div className="input__container">
          <label>Garage</label>
          <input type="number" value={listingData.garage} onChange={(e) => setListingData({...listingData, garage: e.target.value})} required placeholder="Enter number of garage"/>
        </div>

        <div className="input__container">
          <label>Location</label>
          <input type="text" value={listingData.location} onChange={(e) => setListingData({...listingData, location: e.target.value})} required placeholder="Please enter the city property is located"/>
        </div>

        <div className="input__container">
          <label>Address</label>
          <input type="text" value={listingData.address} onChange={(e) => setListingData({...listingData, address: e.target.value})} required placeholder="Enter address of property"/>
        </div>

        <div className="input__container">
          <label>Description</label>
          <textarea cols="20" rows="10" value={listingData.description} onChange={(e) => setListingData({...listingData, description: e.target.value})} required placeholder="Enter a brief description of the property"></textarea>
        </div> 

        <div className="input__container">
          <label>Apartment photo</label>
          <input type="file" onChange={handleFile} required />
          <div className="progress-bar" style={{width: `${progress}%`}}>{`${Math.round(progress)}%`}</div>
        </div>

      <button type="submit" className="upload-btn">{loading? <ButtonLoader /> : `${id ? 'Update' : 'Submit'}`}</button>
      </form>
    </React.Fragment>
  );
}

export default Sell