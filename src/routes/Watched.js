import React from "react";
import MainNavbar from "../components/MainNavbar";
import styles from "./Watched.module.css";

function Watched({isLogged, setIsLogged}) {
    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h3 className={styles.watchedTitle}>최근 본 상품</h3>
            
        </>
    )
}

export default Watched;
