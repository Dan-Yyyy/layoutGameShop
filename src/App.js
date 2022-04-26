import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Header } from './components/header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
