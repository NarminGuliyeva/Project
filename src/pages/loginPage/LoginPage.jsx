import React, { useRef, useState } from 'react'
import './Login.css'
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';

const LoginPage = () => {
    const whiteAreaRef = useRef(null);
    const blackAreaRef = useRef(null);
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const signIn = () => {
        setIsSigningIn(true);
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 0);
    };

    const signUp = () => {
        setIsSigningIn(false);
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 0);
    };

    return (
        <div className="common-area center">
            <div className={`black-area area ${!isSigningIn && triggerAnimation ? 'animate-signup' : ''}`}>
                <SignUp funcSignIn={signIn}/>
            </div>
            <div className={`white-area area ${isSigningIn && triggerAnimation ? 'animate-signin' : ''}`}>
                <SignIn funcSignUp={signUp}/>
            </div>
        </div>
    )
}

export default LoginPage