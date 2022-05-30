import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Game } from './pages/game/Game';
import { Order } from './pages/order/Order';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/app/:title' element={<Game />}/>
            <Route path='/order' element={<Order />}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
