import React from "react";
import MainCarousel from "../components/MainCarousel";
import MainNavbar from "../components/MainNavbar";
import MainPopularItem from "../components/MainPopularItem";
import Footer from "../components/Footer";
import {Button} from "react-bootstrap";
import "./Home.css";

function Home({popularShoes,setPopularShoes}) {

    return (
        <div>

            <MainNavbar />

            <MainCarousel />

            <div className="popular-item">
                <h3>인기 상품</h3>
                <div className="container">
                    <div className="row popular-list">
                        {popularShoes.map((shoes, idx) => {
                            return (
                                <MainPopularItem shoes={shoes} key={idx} idx={idx} />
                            )
                        })} 
                    </div>
                </div>
            </div>

            <div className="another-item">
                <Button variant="primary" onClick={() => {}}>다른 상품보기</Button>{' '}
                <ul></ul>
            </div>

            <Footer />

        </div>
    )
}

export default Home;