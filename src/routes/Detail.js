import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "./Detail.css";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import TabContent from "../components/TabContent";

function Detail({popularShoes,setPopularShoes}) {
    const [tabs, setTabs] = useState(0);
    const [isAlert, setIsAlert] = useState(true);

    const navigate = useNavigate();
    let { id } = useParams();
    let findItem = popularShoes.find(item => item.id == id);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsAlert(false),3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <MainNavbar />
            <h1 className="red">상품 정보</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 detailInfo">
                        <img src={`https://raw.githubusercontent.com/ykkim97/ShoesData/main/popular-item/shoes${findItem.id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-12 detailInfo">
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p>{findItem.price}</p>

                        <button className="btn btn-danger">주문하기</button> 
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