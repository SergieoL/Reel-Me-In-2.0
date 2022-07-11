import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
    </div>
  )
}

export default App;