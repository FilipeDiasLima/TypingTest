import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import { ComponentsContexts } from './contexts/ComponentsContexts';

function MyApp() {
  const { hitsTotal, missTotal, score, words } = useContext(ComponentsContexts);

  return (
    <App hitsTotal={hitsTotal} missTotal={missTotal} score={score} words={words}/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <MyApp />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
