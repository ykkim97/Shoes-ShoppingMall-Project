// Navbar에 있는 카테고리를 클릭했을 경우 보여지는 페이지

import React from "react";
import MainNavbar from "../components/MainNavbar";
import {Nav} from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "./Category.module.css";

function Category() {
    return (
        <>
            <MainNavbar />
            <h3 className={styles.categoryTitle}>신발카테고리명</h3>
            <h5>
                <Nav variant="pills" defaultActiveKey="/category" className={styles.categoryTabs}>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-1">운동화/스니커즈/캐주얼</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-2">구두</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-3">샌들/슬리퍼/기타</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-4">양말/의류</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <Footer /> */}
            </h5>
        </>
    )
}

export default Category;