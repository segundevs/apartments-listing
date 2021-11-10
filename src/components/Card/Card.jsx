// import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import listedHouse from '../../images/listed-house.jpg';
import {Link} from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import './card.style.scss';

const Card = ({apt}) => {
  const { user } = useAuth();

  const handleClick = () => {
    console.log('deleting...')
  }

  return (
      <div className="card-inner">
          <img src={apt.imageUrl ? apt.imageUrl : listedHouse} alt="listed-apartment" className="card-listed-apartment"/>
            <div className="card-apartment-details">
              <h3 className="card-apartment-price"># {apt.price.toLocaleString()}</h3>  
              <div className="card-apartment-address">
                <div className="card-apartment-location">
                  <h4 className="card-apartment-name">{apt.type}</h4>
                  <div className="card-location-container">
                  <LocationOnIcon className="card-location-icon"/>
                  <p className="card-location-text">
                    {apt.location}
                  </p>
                  </div>
                  <Link to={`/details/${apt._id}`} className="details-link">See more <ArrowRightAltIcon className="arrow-icon" /></Link>
                </div>              
                  {user && user.uid === apt.userId ? 
                  <DeleteForeverIcon className="card-favorite-icon" onClick={handleClick}/>  
                  : null}           
              </div>
            </div>
          </div>
  )
}

export default Card
