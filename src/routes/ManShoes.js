import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";

function ManShoes({isLogged, setIsLogged}) {
    const [manShoesData, setManShoesData] = useState([]);
    return(
        <>
            <div>
                <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                <h3>남성신발 ({0}개의 상품)</h3>
                <div className="container">
                    <div className="row">
                        {/* 
                            반복문 -> 
                            <div className="col-md-4">
                                내용 : 이미지, 상품명, 상품간단설명, 상품가격
                            </div> 
                        */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManShoes; 
