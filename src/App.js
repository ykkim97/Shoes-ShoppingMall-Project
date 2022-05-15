import React, { useState, useEffect } from 'react';
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
import ManShoes from './routes/ManShoes';
import WomanShoes from './routes/WomanShoes';
import KidsShoes from './routes/KidsShoes';
import axios from "axios";

function App() {
  const [popularShoes, setPopularShoes] = useState(popularData);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [ax, setAx] = useState(false);

  useEffect(() => {
        !ax && axios.get(`https://younggwons.github.io/item/anotherItem.json`)
          .then((result) => {
              setPopularShoes([...popularShoes, ...result.data]);
              setAx(true);
          })
          .catch(() => {
              console.log("요청 실패")
          })
  }, [])

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          
          {/* 메인 페이지 */}
          <Route exact path='/' element={<Home 
            popularShoes={popularShoes}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
          />}></Route>

          {/* 로그인 페이지 */}
          <Route exact path='/auth' element={<Auth 
            user={user} 
            setUser={setUser}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
          />}></Route>

          {/* 회원가입 페이지 */}
          <Route exact path='/auth/signup' element={<SignUp />}></Route>

          {/* 제품 별 상세페이지 */}
          <Route exact path='/detail/:id' element={<Detail 
            popularShoes={popularShoes} 
            setPopularShoes={setPopularShoes}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
          />}></Route>

          {/* 남성신발 페이지 */}
          <Route exact path='/man' element={<ManShoes 
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            popularShoes={popularShoes}
            setPopularShoes={setPopularShoes}
            ax={ax}
          />}></Route>

          {/* 여성신발 페이지 */}
          <Route exact path='/woman' element={<WomanShoes 
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            popularShoes={popularShoes}
            setPopularShoes={setPopularShoes}
            ax={ax}
          />}></Route>

          {/* 키즈신발 페이지 */}
          <Route exact path='/kids' element={<KidsShoes 
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            popularShoes={popularShoes}
            setPopularShoes={setPopularShoes}
            ax={ax}
          />}></Route>

          {/* 장바구니 페이지 */}
          <Route exact path='/cart' element={<Cart 
            isLogged={isLogged} 
            setIsLogged={setIsLogged}
          />}></Route>

          {/* 마이 페이지 */}
          <Route exact path='/mypage' element={<MyPage isLogged={isLogged} setIsLogged={setIsLogged}/>}></Route>

          {/* 그 외 404에러 */}
          <Route path='*' element={<div><img src='/img/404error.jpg'></img></div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
