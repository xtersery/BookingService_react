import React, {useState, useRef} from 'react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useNavigate} from 'react-router-dom';
import { Typography } from 'antd';



export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const sendRequest = async () => {
                const user = {
                    "email": emailRef.current?.value,
                    "password": passwordRef.current?.value,
                };
                await fetch('http://localhost:8080/', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(user),
                    headers: {
                        'Detail': 'login',
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .catch((err) => console.log(err.message));
                navigate("../");
            }

    return(

     <div className="container">

        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={mailOutline} />
                        </span>
                        <input type="email" ref={emailRef} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={lockClosedOutline} />
                        </span>
                        <input type="password" ref={passwordRef} required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn" onClick={sendRequest}>Login</button>
                    <div className="login-register">
                        <p>Don't have an account <br/>
                            <Typography.Text onClick={() => navigate("../register")}>Register</Typography.Text>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>

    );
}
