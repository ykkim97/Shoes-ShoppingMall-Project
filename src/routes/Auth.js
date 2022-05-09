// 회원가입, 로그인 컴포넌트

import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase";


function Auth() {
    // 회원가입 email, pw
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // 로그인 email, pw
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })
    
    // 회원가입 함수
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

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
            {/* 회원가입 */}
            <div>
                <h3>회원가입</h3>
                <label>ID</label>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email..."
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }} />
                <label>PASSWORD</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password..."
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }} />
                <button onClick={signup}>회원가입</button>
            </div>
            
            {/* 로그인 / 로그아웃 */}
            <div>
                {/* 로그인 */}
                <h3>로그인하기</h3>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email..."
                    onChange={(e) => {setLoginEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password..."
                    onChange={(e) => {setLoginPassword(e.target.value)}}
                />
                <button onClick={signin}>로그인</button>
                <div>User Logged In : {user?.email}</div>

                {/* 로그아웃 */}
                <button onClick={signout}>로그아웃</button>
            </div>
        </>
    )
}

export default Auth;
