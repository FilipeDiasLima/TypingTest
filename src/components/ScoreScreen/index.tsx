import React, { useContext } from 'react';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';
import { IoCloseSharp } from 'react-icons/io5'
import { Doughnut } from 'react-chartjs-2';
import { useCookies } from 'react-cookie';

import './score.css';

function ScoreScreen() {
  const { openScore, theme } = useContext(ComponentsContexts)
  const [cookies, setCookies] = useCookies([
    'hitsTotal', 
    'missTotal', 
    'words', 
    'score', 
    'time'
  ])
  
  const wordsPerSeconds =  cookies.hitsTotal/cookies.time

  const data = {
    labels: ['Hits', 'Miss'],
    datasets: [
      {
        label: 'Total',
        data: [cookies.hitsTotal, cookies.missTotal],
        backgroundColor: ['#8260E3', '#CD4444'],
        borderColor: ['#FFF', '#FFF'],
        boderWidth: 1,
      },
    ],
  };

  const dataScore = {
    labels: ['    ', 'Hits'],
    datasets: [
      {
        label: 'Score',
        data: [1.0 - Number(cookies.score), Number(cookies.score)],
        backgroundColor: ['#FFF', '#F16296'],
        borderColor: ['#FFF', '#FFF'],
        boderWidth: 1,
      },
    ],
  };
  const dataHitSec = {
    labels: ['    ', 'Hits'],
    datasets: [
      {
        label: 'Words per seconds',
        data: [1.0 - wordsPerSeconds, wordsPerSeconds],
        backgroundColor: ['#787878','#8260E3'],
        borderColor: ['#FFF', '#FFF'],
        boderWidth: 1,
      },
    ],
  };

  return (
    <div className={`screen-container-${theme}`}>
      <header className="score-header">
        <button className={`close-button-${theme}`} onClick={openScore}>
          <IoCloseSharp size={25}/>
        </button>
        <strong className={`score-header-${theme}`}>SCORE</strong>
        <button className="score-close-button-left" disabled >
          <IoCloseSharp size={25}/>
        </button>
      </header>
      <div className="score-main">
        <div className="hits-miss">
          <span className={`span-chart-${theme}`}>Hits and Miss</span>
          <Doughnut data={data} />
        </div>
        <div className="score-words">
          <span className={`span-chart-${theme}`}>HIT RATE</span>
          <Doughnut data={dataScore} />
        </div>
        <div className="hits-miss">
          <span className={`span-chart-${theme}`}>Hits per second</span>
          <Doughnut data={dataHitSec} />
        </div>
      </div>
    </div>
  )
}

export default ScoreScreen;