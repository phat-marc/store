import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
 
// import { ReactComponent as Logo } from '../../assets/pets.svg';
import { ReactComponent as Logo } from '../../assets/pets.svg';
import './header.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-box' to="/">
      <Logo className='logo' />
    </Link>
    <div className='opts-box'>
      <Link className='opts' to="/signin">
        LOGIN
      </Link>
      <Link className='opts' to="/shop">
        SHOP
      </Link>
      <Link className='opts' to="/contact">
          CONTACT
      </Link>
      {
        currentUser ?
        <div className='opts' onClick={() => auth.signOut()}>LOG OUT</div>
        : <Link className='opts' to='./signin'></Link>
      }
    </div>
  </div>
)

export default Header;