import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/pets.svg';
import { ReactComponent as Logo } from '../../assets/pets.svg';
import './header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-box' to="/">
      <Logo className='logo' />
    </Link>
    <div className='opts-box'>
      <Link className='opts' to="/shop">
        SHOP
      </Link>
      <Link className='opts' to="/contact">
          CONTACT
      </Link>
    </div>
  </div>
)

export default Header;