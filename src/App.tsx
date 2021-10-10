import React, { useState } from 'react';

import Header from './components/Header';
import Keyboard from './components/Keyboard';
import { ComponentsProvider } from './contexts/ComponentsContexts';

import './App.css';
import './main.css';

function App() {
  const [theme, setTheme] = useState('pink');
  
  return (
    <ComponentsProvider>
      <div className={theme}>
        <Header />
        <main className='main-container'>
          <Keyboard />
        </main>
      </div>
    </ComponentsProvider>    
  );
}

export default App;
