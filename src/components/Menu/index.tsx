import React from 'react';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { IoLanguageOutline } from 'react-icons/io5';
import { MdColorLens } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import Header from '../Header';

import './menu.css';

function Menu() {

  return (
    <div className='menu-container'>
      <Header />
      <main className='menu-options'>
        <div className='group-menu'>
          <button className='menu-option'>
            <HiOutlineChartSquareBar />
            <span>skills</span>
          </button>
          <button className='menu-option'>
            <IoLanguageOutline />
            <span>language</span>
          </button>
        </div>
        <div className='group-menu'>
          <button className='menu-option'>
            <MdColorLens />
            <span>theme</span>
          </button>
          <button className='menu-option'>
            <RiUser3Line />
            <span>profile</span>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Menu;