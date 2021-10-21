import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';

import './language.css';

function LanguageScreen() {
  const { openLanguage, changeLanguage, theme } = useContext(ComponentsContexts);

  function handleClick(value: string) {
    changeLanguage(value);
    changeLanguage(value);
    openLanguage();
  }

  return (
    <div className={`screen-container-${theme}`}>
      <header className="language-header">
        <button className={`close-button-${theme}`} onClick={openLanguage}>
          <IoCloseSharp size={25}/>
        </button>
        <strong className={`theme-header-${theme}`}>Language</strong>
        <button className="language-close-button-left" disabled >
          <IoCloseSharp size={25}/>
        </button>
      </header>
      <div className="language-main">
          <button className={`menu-option-${theme}`} onClick={() => handleClick('en')}>
            <span>English</span>
          </button>
          <button className={`menu-option-${theme}`} onClick={() => handleClick('ptbr')}>
            <span>Português</span>
          </button>
      </div>
    </div>
  )
}

export default LanguageScreen;