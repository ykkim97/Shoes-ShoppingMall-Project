// 메인 홈 화면

import React, { useState } from "react";
import MainCarousel from "../components/MainCarousel";
import MainNavbar from "../components/MainNavbar";
import MainPopularItem from "../components/MainPopularItem";
import Footer from "../components/Footer";
import {Button} from "react-bootstrap";
import axios from "axios";
import styles from "./Home.module.css";

function Home({popularShoes,setPopularShoes,visible, setVisible, isLogged, setIsLogged}) {
    //신발데이터 요청
    const anotherDataRequest = () => {
        axios.get(`https://younggwons.github.io/item/anotherItem.json`)
        .then((result) => {
            setPopularShoes([...popularShoes, ...result.data]);
            setVisible(false)
        })
        .catch(() => {
            console.log("요청 실패")
        })
    }


    return (
        <div>

            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

            <MainCarousel />

            <div className={styles["popular-item"]}>
                <h3 className={styles["popular-title"]}>인기 상품</h3>
                <div className="container">
                    <div className="row" id={styles["popular-list"]}>
                        {popularShoes.map((shoes, idx) => {
                            return (
                                <MainPopularItem shoes={shoes} key={idx} idx={idx} />
                            )
                        })} 
                    </div>
                </div>
            </div>

            {
                visible && 
                (<div className={styles["another-item"]}>
                    <Button variant="primary" onClick={anotherDataRequest}>다른 상품보기</Button>{' '}
                    <ul></ul>
                </div>)
            }

            <Footer />

        </div>
    )
}

export default Home;