// 상품 상세 정보 Page(상품별 정보)

import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "./Detail.css";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import TabContent from "../components/TabContent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// styled-components 연습
const Btn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
    border-radius : 5px
`

const GreyBox = styled.div`
    background : grey;
    padding : 20px;
    text-align : center;
`

function Detail({popularShoes,setPopularShoes}) {
    const [tabs, setTabs] = useState(0);
    const [isAlert, setIsAlert] = useState(true);

    const navigate = useNavigate();
    let { id } = useParams();
    let findItem = popularShoes.find(item => item.id == id);
    
    const basketState = useSelector(state => state.basketReducer);
    const dispatch = useDispatch();
    const addBasket = () => {
        dispatch({type : "항목추가", payload : {id : findItem.id, name : findItem.title, quan : 1}});
        alert('장바구니에 상품이 담겼습니다.')
    }

    useEffect(() => {
        const timer = setTimeout(() => setIsAlert(false),3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <MainNavbar />
            <GreyBox>
                <h3>신규 고객 대상 30% 할인 쿠폰 증정</h3>
                <Btn bg="yellow">쿠폰발급받기</Btn>
            </GreyBox>
            <h1 className="red">상품 정보</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 detailInfo">
                        <img src={`https://raw.githubusercontent.com/younggwons/younggwons.github.io/master/item/shoes${findItem.id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-12 detailInfo">
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p>{findItem.price}</p>

                        <button className="btn btn-primary"
                            onClick={addBasket}
                        >장바구니담기</button>
                        <button className="btn btn-primary"
                            onClick={() => navigate('/cart')}
                        >장바구니로</button>
                        <button className="btn btn-success">바로구매</button> 
                        <button className="btn btn-danger" onClick={() => navigate(-1)}>뒤로가기</button> 
                    </div>
                </div>

                {
                    isAlert === true 
                    ? (
                        (<div className="salesAlert">
                            <p>🔴 품절임박 : 재고가 얼마남지 않았습니다. 🔴</p>
                        </div>)
                    ) : null
                }

                <Nav className="mt-5" variant="tabs" defaultActiveKey="/link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => {setTabs(0)}}>상품상세</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => {setTabs(1)}}>상품평</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => {setTabs(2)}}>배송/교환/반품 안내</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <TabContent tabs={tabs} />
            </div> 

            

            <Footer />
        </>
    )
}

export default Detail;