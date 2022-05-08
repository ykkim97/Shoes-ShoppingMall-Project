// Navbar에 있는 카테고리를 클릭했을 경우 보여지는 페이지

import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import {Nav} from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "./Category.module.css";

function Category() {
    const [categoryTabs, setCategoryTabs] = useState(0);
    return (
        <>
            <MainNavbar />
            <h3 className={styles.categoryTitle}>카테고리명</h3>
            <h5>
                <Nav variant="pills" defaultActiveKey="link-1" className={styles.categoryTabs}>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-1" className={styles.categoryItemLink} onClick={() => setCategoryTabs(0)}>운동화/스니커즈/캐주얼</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-2" className={styles.categoryItemLink} onClick={() => setCategoryTabs(1)}>구두</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-3" className={styles.categoryItemLink} onClick={() => setCategoryTabs(2)}>샌들/슬리퍼/기타</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.categoryTabsItem}>
                        <Nav.Link eventKey="link-4" className={styles.categoryItemLink} onClick={() => setCategoryTabs(3)}>양말/의류</Nav.Link>
                    </Nav.Item>
                </Nav>
                <CategoryTabContent categoryTabs={categoryTabs}/>
                {/* <Footer /> */}
            </h5>
        </>
    )
}

function CategoryTabContent({categoryTabs}) {
    if (categoryTabs === 0) return <div>운동화/스니커즈/캐주얼</div>
    else if (categoryTabs === 1) return <div>구두</div>
    else if (categoryTabs === 2) return <div>샌들/슬리퍼/기타</div>
    else if (categoryTabs === 3) return <div>양말/의류</div>
}

export default Category;