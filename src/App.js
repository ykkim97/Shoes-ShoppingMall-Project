import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import popularData from './components/popularData';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [popularShoes, setPopularShoes] = useState(popularData);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home popularShoes={popularShoes} setPopularShoes={setPopularShoes} />}></Route>
          <Route exact path='/detail/:id' element={<Detail popularShoes={popularShoes} setPopularShoes={setPopularShoes}/>}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route path='*' element={<div><img src='/img/404error.jpg'></img></div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
