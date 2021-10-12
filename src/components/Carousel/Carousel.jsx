import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import listedHouse from '../../images/listed-house.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './carousel.style.scss';

const CarouselContainer = () => {
  const responsive = {
  desktop: {
    breakpoint: { max: 1200, min: 960 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 960, min: 480 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group" > 
      <button className="prev-btn btn" onClick={() => previous()}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className="next-btn btn" onClick={() => next()}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

// const CustomDot = ({onClick, ...rest}) => {
//   // const { onMove, index, active, carouselState: { currentSlide, deviceType, totalItems }} = rest;
//   // // console.log(onMove, index, active, rest)
//   console.log(onClick)
//   return (
//      <div className="custom-dot-list-style"></div>
//   )
 
// }


  return (
    <div className="carousel__container">
        <div className="carousel__inner-text">
          <h2 className="carousel__header">New Listed Apartments</h2>
          <p className="carousel__text">With over 1million+ homes for sale, all available on the apartments website</p>
      </div>
    <Carousel  responsive={responsive}
    swipeable={true}
  draggable={true}
  infinite={true}
  showDots={true}
  arrows={false} 
  ssr={true}
  renderButtonGroupOutside={true}
  customButtonGroup={<ButtonGroup />}
    >
        {/* <div className="carousel-container"> */}
          {/* item-1 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
              
              </div>
            </div>
          </div>  
            {/* item-2 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
            
              </div>
            </div>
          </div>  

          {/* item-3 */}
         <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
             
              </div>
            </div>
          </div>  
          {/* item-4 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
              
              </div>
            </div>
          </div>  

            {/* item-5 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
                
              </div>
            </div>
          </div>  

          {/* item-6 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
             
              </div>
            </div>
          </div>  

          {/* item-7 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
           
              </div>
            </div>
          </div>  

          {/* item-8 */}
          <div className="carousel-inner">
            <img src={listedHouse} alt="listed-apartment" className="listed-apartment"/>
            <div className="apartment-details">
              <h3 className="apartment-price">$100,000</h3>
              
              <div className="apartment-address">
                <div className="apartment-location">
                  <h4 className="apartment-name">Harrison Apartments</h4>
                  <div className="location-container">
                  <LocationOnIcon className="location-icon"/>
                  <p className="location-text">
                    San Francisco, CA
                  </p>
                  </div>
                </div>
                
                  <FavoriteIcon className="favorite-icon"/>
            
              </div>
            </div>
          </div>  
        {/* </div> */}
    </Carousel>
    </div>
  )
}

export default CarouselContainer
