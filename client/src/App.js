import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/layouts/Main';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
