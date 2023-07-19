import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to={'/'}>Notes</Link>
        </li>
        <li>
          <Link to={'/create-note'}>Create New Note</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;