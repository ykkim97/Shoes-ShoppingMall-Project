import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from "./SignUp.module.css";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";

function SignUp () {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const database = getDatabase();
    const auth = getAuth();
    
    // 회원가입 함수
    const signup = async () => {
        try {
            
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            const userId = auth.currentUser.uid;
            push(ref(database, `users/` + userId), {
                email: registerEmail,
            })
            console.log(userId)

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            {/* 회원가입 */}
            <div className={styles.signUpForm}>
                <h3>회원가입</h3>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    name="email" 
                    placeholder="Email..."
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }}
                    className={styles.signUpEmailInput}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    placeholder="Password..."
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }} 
                    className={styles.signUpPasswordInput}
                />
                <button onClick={signup} className={styles.signUpBtn}>완료</button>
            </div>
        </div>
    )
}

export default SignUp;

