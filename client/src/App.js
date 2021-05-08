import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/layouts/Main';
import Welcome from '../src/layouts/Welcome';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome />}>
            <Route path="/" element={<Home />} />

          </Route>
          <Route element={<Main />}>
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
