import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

//Navbar Part
function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">카페슈</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">  
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">홈</Nav.Link>
                    <NavDropdown title="남성신발" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">운동화/스니커즈/캐주얼</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">구두</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">샌들/슬리퍼/기타</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">양말/의류</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="여성신발" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/4.1">운동화/스니커즈/캐주얼</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.2">구두</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.3">샌들/슬리퍼/기타</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.4">양말/의류</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#kids">키즈</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/cart">장바구니</Nav.Link>
                    <Nav.Link as={Link} to="/mypage">
                    마이페이지
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;