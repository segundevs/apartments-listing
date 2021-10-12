import Button from '../Button/Button';
import aboutOne from '../../images/about-img-1.jpg';
import aboutTwo from '../../images/about-img-2.jpg';
import aboutThree from '../../images/about-img-3.jpg';
import aboutFour from '../../images/about-img-4.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import './about.style.scss';

const About = () => {
  return (
    <div className="about__container">
      <div className="about__container-images">
        <div className="images-left">
          <img src={aboutOne} alt="high-rise-building" className="image-1 img"/>
          <img src={aboutTwo} alt="high-rise-building" className="image-2 img"/>
        </div>
        <div className="images-right">
          <img src={aboutThree} alt="high-rise-building" className="image-3 img"/>
          <img src={aboutFour} alt="high-rise-building" className="image-4 img"/>
        </div>
        <LocationOnIcon className="img-location-icon"/>
        <div className="search-input">
          <input type="text" className="input-field" placeholder="Search property..." disabled/>
          <SearchIcon className="search-input-icon"/>
        </div>
      </div>
      <div className="about__container-text">
        <h6 className="about__heading">About us</h6>
        <h4 className="about__sub-heading">Helping people to find their home</h4>
        <p className="about__text">
          Apartments can help you easily find a rent, sell or buy that you'll love. As with any new technology, building designers experiment and learn from each other in the pursuit of new solutions which can help you easily find your new home.
        </p>
        <Button />
      </div>
      
    </div>
  )
}

export default About
