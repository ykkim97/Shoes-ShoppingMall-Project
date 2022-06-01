// 장바구니 Page

import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import {Table,Button} from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Cart({isLogged, setIsLogged}) {
    let total = 0;

    const state = useSelector((state) => state.basketReducer);
    const alertState = useSelector((state) => state.basketAlertReducer);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.shoppingBasketDiv}>

                {/* Navbar */}
                <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

                {/* "장바구니" 제목 */}
                <h1 className={styles.shoppingBasket}>장바구니</h1>

                {/* 장바구니 목록 테이블 */}
                <Table className={styles.basketTable} striped bordered hover>
                    <thead className={styles.basketTableHead}>
                        <tr>
                            <th>상품 ID</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>단가</th>
                            <th>총 합</th>
                            <th>변경</th>
                        </tr>
                    </thead>
                    <tbody className={styles.basketTableBody}>
                        {state.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.id}</td> 
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {item.price * item.quan}
                                    </td>
                                    <td className={styles.quanChangeBtn}>
                                        <button 
                                            onClick={() => {
                                                dispatch({type : "수량증가", id : item.id, price : item.price})
                                            }
                                        }>+</button>
                                        <button 
                                            onClick={() => {
                                                if (item.quan > 0) dispatch({type : "수량감소", id : item.id});
                                            }
                                        }>-</button>
                                        <button 
                                            onClick={() => {
                                                dispatch({type : "항목삭제"});
                                                alert('상품이 삭제되었습니다.')
                                            }
                                        }>X</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                {/* 신규고객 첫 구매시 30%할인 광고 */}
                {
                    alertState === true ? 
                    (<div className={styles.shoppingBasketAlert}>
                        <p>신규 고객 첫 구매 시 30% 할인! </p>
                        <button onClick={() => {
                            dispatch({type : "닫기"})
                        }}>닫기</button>
                    </div>) : null
                }

                
                {/* 총 결제 금액 보여주기 */}
                <div className={styles.totalAmount}>
                    <p>총 결제 금액 : 
                        {state.map(item => {
                            total += (item.price * item.quan);
                            return total;
                        })[state.length - 1]} 원
                    </p>
                </div>

                {/* 결제하기, 뒤로가기 버튼 */}
                <div className={styles.payment}>
                    <Button className={styles.goPaymentBtn}>결제하기</Button>
                    <Button className={styles.goBackBtn} onClick={() => {navigate(-1)}}>뒤로가기</Button>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default Cart;