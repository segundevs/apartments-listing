import Hero from '../../components/Hero/Hero';
import CarouselContainer from '../../components/Carousel/Carousel';
import OurServices from '../../components/OurServices/OurServices';
import About from '../../components/About/About';
import VideoComp from '../../components/VideoComp/VideoComp';
import './home.style.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <CarouselContainer />
      <OurServices />
      <About />
      <VideoComp embedId="M6P6MleornA"/>
    </>
  )
}

export default Home
