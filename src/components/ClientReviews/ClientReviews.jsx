import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import customer from '../../images/agent-1.jpg';
import customer2 from '../../images/agent-2.jpg';
import './clientReviews.style.scss';

const ClientReviews = () => {

  const responsive = {
  desktop: {
    breakpoint: { max: 1200, min: 960 },
    items: 2,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 960, min: 480 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};


const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="reviews__carousel-button-group"> 
      <button className="prev-btn rev-btn" onClick={() => previous()}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className="next-btn rev-btn" onClick={() => next()}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};


  return (
    <div className="reviews__container">
      <div className="reviews__inner-text">
        <h6>Client reviews</h6>
        <h4>We Build In Trust With Our Clients & Agents</h4>
      </div>
    <Carousel  responsive={responsive}
    swipeable={true}
  draggable={true}
  infinite={true}
  arrows={false} 
  ssr={true}
  renderButtonGroupOutside={true}
  customButtonGroup={<ButtonGroup />}
    >
      <div className="reviews__carousel-inner">
        <p>This website is amazing with all the features it offers. I can't image how difficult it would have been if I had to start looking for an apartment by myself</p>

        <div className="reviews__customer">
           <div className="customer-thumbnail">
          <img src={customer} alt="user-profile" />
          </div>
          <div className="customer-detail">
            <h4>Michele Smith</h4>
            <p>COO of Weebly</p>
          </div>
        </div>
      </div>

      <div className="reviews__carousel-inner">
        <p>This website is amazing with all the features it offers. I can't image how difficult it would have been if I had to start looking for an apartment by myself</p>

        <div className="reviews__customer">
           <div className="customer-thumbnail">
          <img src={customer2} alt="user-profile" />
          </div>
          <div className="customer-detail">
            <h4>Emily Rowe</h4>
            <p>CEO of Fluffy</p>
          </div>
        </div>
      </div>


      <div className="reviews__carousel-inner">
        <p>This website is amazing with all the features it offers. I can't image how difficult it would have been if I had to start looking for an apartment by myself</p>

        <div className="reviews__customer">
           <div className="customer-thumbnail">
          <img src={customer} alt="user-profile" />
          </div>
          <div className="customer-detail">
            <h4>Michele Smith</h4>
            <p>COO of Weebly</p>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  )
}

export default ClientReviews
