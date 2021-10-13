import {GiHouseKeys, GiHouse, GiFamilyHouse} from 'react-icons/gi';
import {FaHandshake} from 'react-icons/fa';
import './ourservices.style.scss';

const OurServices = () => {
  return (
    <div className="services__container">
        <h6 className="services__heading">our services</h6>
        <h4 className="services__sub-heading">How Apartments can help</h4>
        <div className="services__grid">
          <div className="grid__item">
            <div className="icon__container">
              <GiHouse className="item__icon"/>
            </div>
            <p className="item__text">Buy your dream home</p>
          </div>
          <div className="grid__item">
            <div className="icon__container">
              <GiFamilyHouse className="item__icon"/>
            </div>
            <p className="item__text">Easily sell your home</p>
          </div>
          <div className="grid__item">
            <div className="icon__container">
              <GiHouseKeys className="item__icon"/>
            </div>
            <p className="item__text">Rent your home you love</p>
          </div>
          <div className="grid__item">
            <div className="icon__container">
              <FaHandshake className="item__icon"/>
            </div>
            <p className="item__text">Be partner with Apartments</p>
          </div>
        </div>
      </div>
  )
}

export default OurServices
