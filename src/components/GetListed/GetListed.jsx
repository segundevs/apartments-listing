import heroImg from '../../images/hero-img-2.png';
import './getListed.style.scss'

const GetListed = () => {
  return (
    <div className="getListed__container">
      <img src={heroImg} alt="low-rise-building" />
      <div className="contact__form">
        <h4><span className="colored-text">Get Listed</span> and sell your property or become a home owner</h4>
        <p>Put your email address and get listed</p>
        <form>
          <input type="email" placeholder="Enter your email address"/>
          <button type="submit">Get Listed</button>
        </form>
      </div>
    </div>
  )
}

export default GetListed
