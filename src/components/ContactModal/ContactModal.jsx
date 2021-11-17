import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './contactModal.style.scss';


const ContactModal = ({open, setOpen, listing}) => {

  const { user } = useAuth();
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(user? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting')
    setOpen(false)
    
  }

  return (
    <Modal open={open} onClose={()=>setOpen(false)} center>
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
        <button type="submit" className="enquiry-btn">Send</button>
      </form>
    </Modal>
  )
}

export default ContactModal