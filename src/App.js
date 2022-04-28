import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/home';
import { Header } from './components/header';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
