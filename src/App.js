import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { UserContext } from './Context/UserContext';

function App() {
  const [user, setUser] = useState('stefan');
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <UserContext.Provider value={{user, setUser}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </UserContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
