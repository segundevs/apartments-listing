import Button from '../Button/Button';
import actionImg from '../../images/action-img.png';
import './action.style.scss';


const Action = () => {
  return (
    <div className="action__container">
      <div className="action__container-text">
        <h6>Sell home</h6>
        <h4>Home selling is now made easier</h4>
        <p>
          The winning offer doesn't always have to be the highest. Our agents help with making the best offer for your situation. We always include technical checks, reservation of funding and when to move in our final bidding strategy.
        </p>
        <Button />
      </div>

       <div className="action__container-images">
          <img src={actionImg} alt="high-rise-building" />
      </div>
      
    </div>
  )
}

export default Action
