import React from "react";
import MainNavbar from "../components/MainNavbar";
import styled from "styled-components"
import styles from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";

// styled-components
const Bar = styled.div`
    background : #cfcccc;
    width : 100%;
    max-width : 1000px;
    height : ${props => props.maxWidth};;
    border-top : 3px solid black;
    border-bottom : 3px solid black;
    color : black;
    display : block;
    margin : auto;
    margin-bottom : 30px;
`

const Item = styled.li`
    list-style : none;
    padding-top : 20px;
    padding-right : 20px;
    font-size : 20px;
    cursor: pointer;
`


function MyPage({isLogged, setIsLogged}) {
    const navigate = useNavigate();
    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h3 className={styles.mypageTitle}>마이 페이지</h3>
            <Bar maxWidth={"150px"}>
                <h5 className={styles.orderCheckTitle}>주문/배송조회</h5>
                <ul className={styles.orderCheckItem}>
                    <Item>입금/결제</Item>
                    <Item>배송중</Item>
                    <Item>배송완료</Item>
                    <Item>구매확정</Item>
                    <Item>환불교환</Item>
                </ul>
            </Bar>
            <Bar maxWidth={"600px"}>
                <h5 className={styles.myShoppingTitle}>나의 쇼핑 활동</h5>
                <ul>
                    <Item onClick={() => {navigate("/cart")}}>장바구니</Item>
                    <Item>주문내역조회</Item>
                    <Item>1:1 문의</Item>
                    <Item onClick={() => {navigate("/watched")}}>최근 본 상품</Item>
                </ul>
            </Bar>
        </>
    )
}

export default MyPage;
