// 회원가입, 로그인 컴포넌트

import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

function Auth() {

    // 로그인 email, pw
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })

    // 로그인 함수
    const signin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
        }
    }
    // 로그아웃 함수
    const signout = async () => {
        await signOut(auth);
    }

    return (
        <>
            {/* 로그인 / 로그아웃 */}
            <div className={styles.loginDiv}>
                {/* 로그인 */}
                <div className={styles.loginForm}>
                    <h3>로그인하기</h3>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email..."
                        onChange={(e) => {setLoginEmail(e.target.value)}}
                        className={styles.loginEmailInput}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password..."
                        onChange={(e) => {setLoginPassword(e.target.value)}}
                        className={styles.loginPasswordInput}
                    />
                    <button onClick={signin} className={styles.loginBtn}>로그인</button>
                    <hr />
                    <button onClick={() => {navigate(`signup`)}}>회원가입</button>
                </div>

                
            </div>
            <div>User Logged In : {user?.email}</div>

            {/* 로그아웃 */}
            <button onClick={signout}>로그아웃</button>
        </>
    )
}

export default Auth;
