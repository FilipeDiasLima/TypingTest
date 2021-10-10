import React, {useContext} from "react"
import { ComponentsContexts } from "../../contexts/ComponentsContexts";

import './header.css';

function Header() {
  const {openMenu} = useContext(ComponentsContexts)

  return (
    <header className='header'>
      <button className='menu-button' onClick={openMenu}>
        <span className='t-top'>T</span>
        <span className='t-bottom'>T</span>
      </button>
    </header>
  )
}

export default Header;