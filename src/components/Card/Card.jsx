import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

import './card.style.scss';

const Card = ({apt}) => {

  return (
    <div className="card-inner">
      <img src={apt.imageUrl} alt="listed-apartment" className="card-listed-apartment"/>
      <div className="card-apartment-details">
        <h3># {apt.price.toLocaleString()}</h3>  
        <div className="card-apartment-address">
          <div className="card-apartment-location">
          <h4>{apt.type}</h4>
            <div className="card-location-container">
              <LocationOnIcon className="card-location-icon"/>
              <p>{apt.location}</p>
            </div>
              <Link to={`/details/${apt._id}`} className="details-link">See more <ArrowRightAltIcon className="arrow-icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
