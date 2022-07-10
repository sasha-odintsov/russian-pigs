import './App.css';
// import { useState, useEffect } from 'react';
import Main from './Main';
import { Routes, Route, Link } from 'react-router-dom';
import DailyLosses from './DailyLosses';

function App() {
  return (
    <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/dailylosses' element={<DailyLosses/>}/>
        </Routes>
    </div>
  );
}

export default App;
