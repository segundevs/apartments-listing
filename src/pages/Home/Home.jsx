import React from 'react';
import Hero from '../../components/Hero/Hero';
import ListedApartments from '../../components/ListedApartments/ListedApartments';
import OurServices from '../../components/OurServices/OurServices';
import AboutSection from '../../components/AboutSection/AboutSection';
import Action from '../../components/Action/Action';
import VideoComp from '../../components/VideoComp/VideoComp';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import GetListed from '../../components/GetListed/GetListed';
import Footer from '../../components/Footer/Footer';

import './home.style.scss';


const Home = ({location, setLocation, price, setPrice, type, setType}) => {
  return (
    <React.Fragment>
      <Hero 
      location={location} 
      setLocation={setLocation} 
      type={type} 
      setType={setType} 
      price={price} 
      setPrice={setPrice}/>
      <ListedApartments />
      <OurServices />
      <AboutSection />
      <Action />
      <VideoComp embedId="7x3Dz7idqCo"/>
      <ClientReviews />
      <GetListed />
      <Footer />
    </React.Fragment>
  )
}

export default Home
