// 장바구니 Page

import React from "react";
import MainNavbar from "../components/MainNavbar";
import {Table,Button} from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Cart({isLogged, setIsLogged}) {
    const state = useSelector((state) => state.basketReducer);
    const alertState = useSelector((state) => state.basketAlertReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h1 className={styles.shoppingBasket}>장바구니</h1>
            <Table className={styles.basketTable} striped bordered hover>
                <thead className={styles.basketTableHead}>
                    <tr>
                        <th>상품 ID</th>
                        <th>상품명</th>
                        <th>수량</th>
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
                                <td className={styles.quanChangeBtn}>
                                    <button 
                                        onClick={() => {
                                            dispatch({type : "수량증가", id : item.id})
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
            
            {
                alertState === true ? 
                (<div className={styles.shoppingBasketAlert}>
                    <p>신규 고객 첫 구매 시 30% 할인! </p>
                    <button onClick={() => {
                        dispatch({type : "닫기"})
                    }}>닫기</button>
                </div>) : null
            }

            <div className={styles.payment}>
                <Button variant="success">결제하기</Button>
                <Button variant="warning" onClick={() => {navigate(-1)}}>뒤로가기</Button>
            </div>

            <Footer />
        </div>
    );
}

export default Cart;