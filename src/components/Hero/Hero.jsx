import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../../images/hero-image-1.png';
import masterCard from '../../images/mastercard-logo.png';
import airbnb from '../../images/airbnb-logo.png';
import uber from '../../images/uber-logo.png';
import paypal from '../../images/paypal-logo.png';
import visa from '../../images/visa-logo.png';
import trustpilot from '../../images/trustpilot-logo.png';
import './hero.style.scss';

const Hero = () => {

  return (
    <div className="hero__container">
       <div className="hero__showcase">
         <div className="hero__showcase-text">
          <h1 className="hero__header">Find Your Perfect Future Home</h1>
          <p className="hero__text">Search confidently with your trusted source of homes for sale or rent</p>
         </div>
         <img src={heroImage} alt="a high rise building" className="hero__showcase-img"/>
       </div>

       <div className="hero__search-container">
        <h4 className="hero__search-header">Search Homes</h4>
        <div className="select__container">
          <div className="location">
            <h4 className="location__header">Location</h4>
            <select className="location__select" disabled >
            <option value="abia">Lagos</option>
          </select>
          </div>

          <div className="type">
            <h4 className="type__header">Property Type</h4>
            <select className="type__select" disabled >
            <option value="duplex">Duplex</option>
          </select>
          </div>

          <div className="price">
          <h4 className="price__header">Max Price</h4>
            <select className="price__select" disabled >
              <option value="5000">$25000</option>
            </select>
        </div>
        <div className="search__icon">
          <SearchIcon />
        </div>
        </div> 
       </div>
      <div className="companies__icons">
        <img src={masterCard} alt="mastercard" />
        <img src={airbnb} alt="air bnb" />
        <img src={uber} alt="uber" />
        <img src={paypal} alt="paypal" />
        <img src={visa} alt="visa" />
        <img src={trustpilot} alt="trustpilot" />
      </div>
    </div>
  )
}

export default Hero

