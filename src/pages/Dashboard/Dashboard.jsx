import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useData } from '../../contexts/dataContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import  './dashboard.style.scss';

import { getStorage, deleteObject, ref } from "firebase/storage";
import { auth } from '../../firebase';

const Dashboard = () => {
  const { user } = useAuth();
  const { getData, data } = useData();
  const history = useHistory();
  const storage = getStorage();

  const [currentUserData, setCurrentUserData] = useState([]);

  useEffect(() => {
    const response = data.filter(res => res.userId === user.uid);
    setCurrentUserData(response);
  }, [data, user.uid])

   const deleteImage = async (fileName) => {
      if(!fileName) return
      const httpsReference = ref(storage, fileName);
      const desertRef = ref(storage, httpsReference);
      await deleteObject(desertRef);
  }

  const deleteData = async(id) => {
    const token = await auth.currentUser.getIdToken();
    await axios.delete(`http://localhost:8080/api/apartments/${id}`, { headers: {
      'Authorization': `Bearer ${token}`
    }});
  }
  
  const handleDelete = async(apt) => {
    deleteImage(apt.imageUrl);
    await deleteData(apt._id);
    getData();
  }

  const handleEdit = (apt) => {
    history.push(`/sell/${apt._id}`)
  }


  return (
    <div className="dashboard__container">
      <h2>{`${user.displayName}'s dashboard`}</h2>
      <h4>{`Welcome ${user.displayName}, ${currentUserData.length > 0 ? 'view your current listings below' : 'you currently do not have any listing'}`}</h4>
      {currentUserData ? currentUserData.map(apt => (
        <div className="dashboard-card" key={apt._id}>
          <div className="dashboard__details">
            <div className="dashboard__details-type">{apt.type}</div>
            <div className="dashboard__details-location">{apt.location}</div>
            <DeleteForeverIcon className="delete-icon" onClick={() => handleDelete(apt)}/> 
            <EditIcon className="edit-icon" onClick={() => handleEdit(apt)}/>
            <ReadMoreIcon className="more-icon" onClick={() => history.push(`details/${apt._id}`)} />
          </div>
        </div>

      )) : null}
    </div>
  )
}

export default Dashboard
