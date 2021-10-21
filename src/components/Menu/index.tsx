import React, { useContext } from 'react';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { IoLanguageOutline } from 'react-icons/io5';
import { MdColorLens } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';
import Header from '../Header';

import './menu.css';

function Menu() {

  const { openScore, openLanguage, openTheme, theme } = useContext(ComponentsContexts)

  return (
    <div className={`menu-container`}>
      <Header isHome={false}/>
      <main className='menu-options'>
        <div className='group-menu'>
          <button className={`menu-option-${theme}`} onClick={openScore}>
            <HiOutlineChartSquareBar />
            <span>skills</span>
          </button>
          <button className={`menu-option-${theme}`} onClick={openLanguage}>
            <IoLanguageOutline />
            <span>language</span>
          </button>
        </div>
        <div className='group-menu'>
          <button className={`menu-option-${theme}`} onClick={openTheme}>
            <MdColorLens />
            <span>theme</span>
          </button>
          <button className={`menu-option-${theme}`}>
            <RiUser3Line />
            <span>profile</span>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Menu;