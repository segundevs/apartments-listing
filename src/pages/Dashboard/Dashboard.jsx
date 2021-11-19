import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useData } from '../../contexts/dataContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getStorage, deleteObject, ref } from "firebase/storage";
import { auth } from '../../firebase';
import  './dashboard.style.scss';

const Dashboard = () => {
  const { user } = useAuth();
  const { getData, data, url } = useData();
  const history = useHistory();
  const storage = getStorage();

  const [currentUserData, setCurrentUserData] = useState([]);

  //Filter thru the data and return only those listings by the logged in user
  useEffect(() => {
    const response = data.filter(res => res.userId === user.uid);
    setCurrentUserData(response);
  }, [data, user.uid])


  //Get a reference to the particular image file from firebase storage
   const deleteImage = async (fileName) => {
      if(!fileName) return
      const httpsReference = ref(storage, fileName);
      const desertRef = ref(storage, httpsReference);
      await deleteObject(desertRef);
  }

  //Make api request to delete data
  const deleteData = async(id) => {
    const token = await auth.currentUser.getIdToken();
    await axios.delete(`${url}/${id}`, { headers: {
      'Authorization': `Bearer ${token}`
    }});
  }
  
  //Delete data and file on clicking the delete button
  const handleDelete = async(apt) => {
    deleteImage(apt.imageUrl);
    await deleteData(apt._id);
    getData();
  }

  //Take user to sell page and populate the input fields with 
  // the data of the listing that is to be edited
  const handleEdit = (apt) => {
    history.push(`/sell/${apt._id}`)
  }


  return (
    <div className="dashboard__container">
      <h2>{`${user.displayName}'s dashboard`}</h2>
      <h4>{`Welcome ${user.displayName}, ${currentUserData.length > 0 ? 'view your current listings below' : 'you currently do not have any listing'}`}</h4>
      {/* If current user has listing, display them, else display null */}
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
