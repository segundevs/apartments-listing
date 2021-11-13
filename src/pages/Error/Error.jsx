import errorImage from '../../images/not-found.svg';
import { Link } from 'react-router-dom';
import './error.style.scss';

const Error = () => {
  return (
    <div className="error-container">
      <img src={errorImage} alt="" />
      <p>Sorry, we could not find that page, Let's take you back <Link to="/">Home</Link></p>
    </div>
  )
}

export default Error
