import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';

import './theme.css';

function ThemeScreen() {
  const { openTheme, changeTheme, theme } = useContext(ComponentsContexts);

  function handleClick(value: string) {
    changeTheme(value);
  }

  return (
    <div className="theme-container" id={`theme-container-${theme}`}>
      <header className={`theme-header-${theme}`}>
        <button className={`close-button-${theme}`} onClick={openTheme}>
          <IoCloseSharp size={25}/>
        </button>
        <strong className="theme-header">Themes</strong>
        <button className="close-button-left" disabled >
          <IoCloseSharp size={25}/>
        </button>
      </header>
      <div className="theme-main">
          <button className={`theme-option-${theme}`} onClick={() => handleClick('pink')}>
            <span>Classic</span>
          </button>
          <button className={`theme-option-${theme}`} onClick={() => handleClick('light')}>
            <span>Light</span>
          </button>
      </div>
    </div>
  )
}

export default ThemeScreen;