import React from 'react';
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb';
import {HashLink} from 'react-router-hash-link'
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <h1>
        Express<span style={{ color: 'rgb(116, 192, 116)' }}>Eats</span>{' '}
        <TbTruckDelivery style={{ color: 'rgb(116, 192, 116)' }} />
      </h1>
      <HashLink to={'/#home'}>Home</HashLink>
      <Link to={'/contact'}>Contact</Link>
      <HashLink to={'/#about'}>About</HashLink>
      <HashLink to={'/#brands'}>Brands</HashLink>
      <Link to={'/services'}>Services</Link>
    </nav>
  );
};

export default Header;
 