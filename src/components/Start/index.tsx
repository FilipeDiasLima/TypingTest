import React, { useContext, useState } from 'react';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';
import Header from '../Header';

import './start.css';

interface StartProps {
  count: number;
  startCount: () => void;
}

function Start({ count, startCount }: StartProps) {
  const [start, setStart] = useState(false);

  const { language, theme } = useContext(ComponentsContexts)

  function handleStart() {
    setStart(true);
    startCount();
  }

  return (
    <div className="start-container">
      <Header isHome={false}/>
      <div className={`start-main-${theme}`}>
        {!start && 
          <span className='start-span'>
            {language === 'en' ? 'Click to Start' : 'Clique em Start'}
          </span>}
        {!start && 
        <>
          <p className="start-instruction">
            {language === 'en' ? 
              '- When you click on Start, you can keep your hand on the keyboard.'
              : 
              '- Quando clicar em Start, você já pode colocar as mãos no teclado.' 
            }
          </p>
          <p className="start-instruction">
            {language === 'en' ? 
              "- You don't need to click on the input text (text field)."
              : 
              '- Você nao precisa clicar no input text (campo de texto).' 
            }
          </p>
          <p className="start-instruction">
            {language === 'en' ? 
              '- When you finish, press Enter or Space.'
              : 
              '- Quando você finalizar, aperte Enter ou Espaço.' 
            }
          </p>
        </>}
        {start && <span className="start-count">{count}</span>}
        {!start && <button className={`start-button-${theme}`} onClick={handleStart}>START</button>}
      </div>
    </div>
  )
}

export default Start;