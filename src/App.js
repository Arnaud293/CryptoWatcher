import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HearderInfo from './components/HearderInfo';

const App = () => {
  
  return (
    <div className='app-container'>
      <header>
        <HearderInfo /> 
      </header>
    </div>
  );
};

export default App;