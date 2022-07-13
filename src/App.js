import './App.scss';
// import { useState, useEffect } from 'react';
import Main from './Main';
import { Routes, Route, Link } from 'react-router-dom';
import MainUa from './MainUa';

function App() {
  return (
    <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/ua' element={<MainUa/>}/>
        </Routes>
    </div>
  );
}

export default App;
