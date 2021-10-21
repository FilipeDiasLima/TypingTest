import React, {useContext, useEffect, useState} from "react"
import { ComponentsContexts } from "../../contexts/ComponentsContexts";

import './header.css';

interface HeaderProps {
  isHome: boolean;
}

function Header({ isHome }: HeaderProps) {
  const { openMenu, isStart, upTime, theme } = useContext(ComponentsContexts)

  const [timer, setTimer] = useState(0);
  
  function setTime() {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000)
  }

  useEffect(() => {
    if(isStart){
      setTime()
      upTime(timer);
    } else {
      setTimer(0);
    }
    // eslint-disable-next-line
  }, [timer, isStart])

  return (
    <header className='header'>
      <button className={`menu-button-${theme}`} onClick={openMenu}>
        <span className='t-top'>T</span>
        <span className='t-bottom'>T</span>
      </button>
      {isHome && <span className={`timer-text-${theme}`}>{timer}</span>}
      <div className='menu-button-opact' style={{ opacity: 0 }}/>
    </header>
  )
}

export default Header;