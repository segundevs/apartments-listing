import './button.style.scss';
import {Link} from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Button = () => {
  return (
    <Link to="/buy" className="button__container">
      Know More
      <ArrowRightAltIcon className="button__icon"/>
    </Link>
  )
}

export default Button
