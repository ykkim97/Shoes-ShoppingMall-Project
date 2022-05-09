import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp () {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

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

    return (
        <div>
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
        </div>
    )
}

export default SignUp;

