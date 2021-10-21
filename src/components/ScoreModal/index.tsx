import React, { useContext } from 'react';

import { ComponentsContexts } from '../../contexts/ComponentsContexts';
import './scoreModal.css';

interface ScoreModalData {
  hits: number;
  miss: number;
  time: number;
}

function ScoreModal({ hits, miss, time }: ScoreModalData) {
  const { closeScoreModal, theme } = useContext(ComponentsContexts)

  return (
    <div className="score-modal-container">
      <div className="score-modal-main">
        <header className='score-modal-header'>Score</header>

        <hr className='score-modal-hr'/>

        <span className="score-modal-label">Hits: <span className="score-modal-span">{hits} words</span></span>
        <span className="score-modal-label">Miss: <span className="score-modal-span">{miss} words</span></span>
        <span className="score-modal-label">Time: <span className="score-modal-span">{time} seconds</span></span>

        <button type='button' className={`score-modal-close-button-${theme}`} onClick={closeScoreModal}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default ScoreModal;