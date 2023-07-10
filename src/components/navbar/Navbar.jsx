import React from 'react';
import './navbar.css';
import {BiSolidHomeCircle} from 'react-icons/bi';
import {GiSuitcase} from 'react-icons/gi';
import {FaClipboardList} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
      <a href='#about'><BiSolidHomeCircle/></a>
      <a href='#works'><GiSuitcase/></a>
      <a href='#services'><FaClipboardList/></a>
      <a href='#contact'><AiFillMessage/></a>
    </nav>
  )
}

export default Navbar;