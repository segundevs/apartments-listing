import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../../images/hero-image-1.png';
import masterCard from '../../images/mastercard-logo.png';
import airbnb from '../../images/airbnb-logo.png';
import uber from '../../images/uber-logo.png';
import paypal from '../../images/paypal-logo.png';
import visa from '../../images/visa-logo.png';
import trustpilot from '../../images/trustpilot-logo.png';
import './hero.style.scss';

const Hero = ({location, setLocation, price, setPrice, type, setType}) => {

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
        <form className="select__container">
          {/* Location container */}
          <div className="location">
            <h4 className="location__header">Location</h4>
            <select className="location__select" value={location} onChange={(e)=>setLocation(e.target.value)}>
            <option value="all">All</option>
            <option value="abia">Abia</option>
            <option value="adamawa">Adamawa</option>
            <option value="akwa-ibom">Akwa-Ibom</option>
            <option value="anambra">Anambra</option>
            <option value="bauchi">Bauchi</option>
            <option value="bayelsa">Bayelsa</option>
            <option value="benue">Benue</option>
          </select>
          </div>

          {/* Property type container */}
          <div className="type">
            <h4 className="type__header">Property Type</h4>
            <select className="type__select" value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="all">All</option>
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

          {/* Max Price */}

          <div className="price">
          <h4 className="price__header">Max Price</h4>
            <select className="price__select" value={price} onChange={(e)=>setPrice(e.target.value)}>
              <option value="all">All</option>
              <option value="5000">$5000</option>
              <option value="10000">$10,000</option>
              <option value="15000">$15,000</option>
              <option value="20000">$20,000</option>
              <option value="250000">$25,000</option>
              <option value="30000">$30,000</option>
              <option value="400000">$40,000</option>
              <option value=">40000">Above $40,0000</option>
            </select>
        </div>
        <div className="search__icon">
          <SearchIcon />
        </div>
        </form> 
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

