import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './Components/MainContent';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContent />} />
      <Route path='navbar' element={<Navbar />} />


    </Routes>
  );
}

export default App;
