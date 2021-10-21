import React, { useContext, useState } from 'react';

import Header from './components/Header';
import Keyboard from './components/Keyboard';
import { ComponentsContexts, ComponentsProvider } from './contexts/ComponentsContexts';

import './App.css';
import './main.css';

interface AppProps {
  hitsTotal: number;
  missTotal: number;
  words: number;
  score: number;
}

function App(props: AppProps) {
  
  return (
    <ComponentsProvider
      hitsTotal={props.hitsTotal}
      missTotal={props.missTotal}
      words={props.words}
      score={props.score}
    >
      <div>
        <Header isHome={true}/>
        <main className='main-container'>
          <Keyboard />
        </main>
      </div>
    </ComponentsProvider>    
  );
}

export default App;
