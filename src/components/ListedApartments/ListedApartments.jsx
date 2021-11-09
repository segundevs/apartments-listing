import {useState, useEffect} from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import Card from '../Card/Card';
import 'react-multi-carousel/lib/styles.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './listedApartments.style.scss';

const ListedApartments = () => {
  const responsive = {
  desktop: {
    breakpoint: { max: 1200, min: 960 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 960, min: 480 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1
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

const [data, setData] = useState([]);

useEffect(() => {
  const getFeatured = async () => {
    const res = await axios.get('http://localhost:8080/api/apartments?limit=4');
    setData(res.data)
  }

  getFeatured()
}, [])

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
      {data && data.map(apt => (
        <Card apt={apt} key={apt._id}/>
      ))}
    </Carousel>
    </div>
  )
}

export default ListedApartments
