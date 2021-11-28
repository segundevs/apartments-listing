import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthError from '../AuthError/AuthError';
import ButtonLoader from '../ButtonLoader';
import './contactModal.style.scss';


const ContactModal = ({open, setOpen, listing}) => {
  
  const { user } = useAuth();
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(user? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = "https://apatmentshub.herokuapp.com/api/apartments/mail";
    setLoading(true)
    try{
      await axios.post(url, {
      senderEmail: email,
      username: username,
      receiverEmail: listing.email,
      subject: `Enquiry for ${listing.bedrooms} bedrooms ${listing.type}, ${listing.location}`,
      message: message
    })
    setLoading(false)
    toast.success('Realtor will get back to you shortly', {theme: "colored", autoClose: 2000 })
    }catch(error){
      setErr(error.message)
      setLoading(false)
    }  
    setOpen(false)  
  }

  return (
    <Modal open={open} onClose={()=>setOpen(false)} center>
      {err && <AuthError component={err}/>}
      <form onSubmit={handleSubmit} className="form__container">
        <h2>Make an enquiry</h2>
        <div className="input-field">
          <label>Property</label>
          <input type="text" defaultValue={`${listing.bedrooms} bedrooms ${listing.type}, ${listing.location}`}/>
        </div>
        <div className="input-field">
          <label>Name</label>
          <input type="text" name="display-name" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-field">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-field">
          <label>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="input-field">
          <label>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit" className="enquiry-btn">{loading ? <ButtonLoader /> : 'Send'}</button>
      </form>
    </Modal>
  )
}

export default ContactModal