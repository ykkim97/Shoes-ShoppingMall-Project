import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import MyPage from './routes/MyPage'
import popularData from './components/popularData';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import { auth } from './firebase';
import Auth from './routes/Auth';
import SignUp from './routes/SignUp';

function App() {
  const [popularShoes, setPopularShoes] = useState(popularData);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home popularShoes={popularShoes} setPopularShoes={setPopularShoes} />}></Route>
          <Route exact path='/auth' element={<Auth 
            user={user} 
            setUser={setUser}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
          />}></Route>
          <Route exact path='/auth/signup' element={<SignUp />}></Route>
          <Route exact path='/detail/:id' element={<Detail popularShoes={popularShoes} setPopularShoes={setPopularShoes}/>}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route exact path='/mypage' element={<MyPage />}></Route>
          <Route path='*' element={<div><img src='/img/404error.jpg'></img></div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
