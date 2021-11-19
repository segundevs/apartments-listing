import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactModal from '../../components/ContactModal/ContactModal';
import axios from 'axios';
import './details.style.scss';

const Details = () => {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getListing = async  () => {
      const res = await axios.get(`http://localhost:8080/api/apartments/${id}`)
      setListing(res.data) 
    }
    getListing()
  }, [id])

  return (
   <div className="details__container">
      <ContactModal open={open} setOpen={setOpen} listing={listing}/>
      <div className="img-container">
        <img src={listing.imageUrl} alt={listing.type} />
      </div>
      <div className="listing-container">
        <div className="listing-left">
          <p><strong>Realtor: </strong>{listing.username}</p>
          <p><strong>Type: </strong>{listing.type}</p>
          <p><strong>Location: </strong>{listing.location}</p>
          <p><strong>Bedrooms: </strong>{listing.bedrooms}</p>
          <p><strong>Bathrooms: </strong>{listing.bathrooms}</p>
          <p><strong>Size: </strong>{listing.size}sq</p>
        </div>
        <div className="listing-right">
          <p><strong>Garage: </strong>{listing.garage}</p>
          <p><strong>Price: </strong>{listing.price}</p>
          <p><strong>Address: </strong>{listing.address}</p>
          <p><strong>Description: </strong>{listing.description}</p>
          <button className="contact-btn" onClick={() => setOpen(true)}>Make Enquiry</button>
        </div>
      </div>
    </div>
  )
}

export default Details
