import React from "react";
import styles from "./Footer.module.css";


// Footer Part
function Footer() {
    return (
        <div className={styles.footer}>
            <div className="footer-info">
                <h3>카페슈 CafeShoe</h3>
                <p>제작 : younggwon Kim</p>
                <p>Email : 97ykkim@naver.com</p>
            </div>
        </div>
    )
}

export default Footer;