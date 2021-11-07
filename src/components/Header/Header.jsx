import {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../images/logo.png';
import './header.style.scss'

import {useAuth} from '../../contexts/authContext';

const Header = () => {

  const { user, logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
   <header className="header">
      <nav className="navbar">
       {/* <Link to="/" className="nav__brand"> */}
        <img src={logo} alt="brand-logo" className="nav__brand"/>
       {/* </Link> */}
        
        <div className="navbar__links-container">

        <div className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/buy" className="nav__link">Buy</Link>
          <Link to="/sell" className="nav__link">Sell</Link>
          {!user && <Link to="/login" className="nav__link login">Login</Link>}
          {!user && <Link to="/signup" className="nav__link login">Sign up</Link>}
          {user && <Link to="/" className="nav__link login" onClick={()=>logOut()}>Logout</Link>}
        </div>

        <div className="menu__icon" onClick={() => setIsOpen(prev => !prev)}>
          {!isOpen ? <MenuIcon className="toggleIcon"/> : <CloseIcon className="toggleIcon"/>}
        </div>

        {isOpen && <div className="nav__links-mobile">
          <Link to="/" className="nav__link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/buy" className="nav__link" onClick={() => setIsOpen(false)}>Buy</Link>
          <Link to="/sell" className="nav__link" onClick={() => setIsOpen(false)}>Sell</Link>
          {!user && <Link to="/login" className="nav__link login" onClick={() => setIsOpen(false)}>Login</Link>}
          {!user && <Link to="/signup" className="nav__link login" onClick={() => setIsOpen(false)}>Sign up</Link>}
          {user && <Link to="/" className="nav__link login" onClick={()=>logOut()}>Logout</Link>}
        </div>}
        </div>    
      </nav>
    </header>
  )
}

export default Header
