import React, {useState} from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { Link, useNavigate } from 'react-router-dom';
import { mailOutline, personOutline, lockClosedOutline } from 'ionicons/icons';
import { Layout, Typography, Input, Button, Row, Col } from 'antd';

const Form = styled.div`
    justify-content: center;
    min-height: 60vh;
    max-width: 70%;
`

export default function Authorize() {
    const navigate = useNavigate();
    let email: string = '';
    let password: string = '';
    let username: string = '';


    const sendRequest = async () => {
        const user = {
            "email": email,
            "password": password,
            "username": username
        };
        await fetch('http://localhost:8080/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Detail': 'user',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .catch((err) => console.log(err.message));
        navigate("../");
    }

    return (
    <div className="container">
        <div className="wrapper">
            <div className="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={personOutline}/>
                        </span>
                        <input type="text" onChange={(e) => username = e.target.value} required/>
                        <label>Full name</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={mailOutline}/>
                        </span>
                        <input type="email" onChange={(e) => email = e.target.value} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={lockClosedOutline} />
                        </span>
                        <input type="password" onChange={(e) => password = e.target.value} required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                    <label><input type="checkbox"/>I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="btn" onClick={sendRequest}>Register</button>
                    <div className="login-register">
                        <p>Already have an account <br/>
                        <Typography.Text onClick={() => navigate("../login")}>Login</Typography.Text>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
