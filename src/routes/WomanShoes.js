import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";

function WomanShoes({isLogged, setIsLogged}) {
    const [womanShoesData, setWomanShoesData] = useState([]);
    return(
        <>
            <div>
                <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                <h3>여성신발 ({0}개의 상품)</h3>
                <div className="container">
                    <div className="row">
                        {/* 
                            반복문 -> 
                            <div className="col-md-4">
                                내용
                            </div> 
                        */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomanShoes; 
