import React, { useRef, useState } from 'react'
import './Login.css'

const LoginPage = () => {
    const whiteAreaRef = useRef(null);  // Reference for white-area
    const blackAreaRef = useRef(null);  // Reference for black-area
    const [isSigningIn, setIsSigningIn] = useState(true); 
    const [triggerAnimation, setTriggerAnimation] = useState(false); // New state to reset animation

    const signIn = () => {
        setIsSigningIn(true);
        setTriggerAnimation(false); // Reset animation
        setTimeout(() => setTriggerAnimation(true), 0); // Re-trigger animation
    };

    const signUp = () => {
        setIsSigningIn(false);
        setTriggerAnimation(false); // Reset animation
        setTimeout(() => setTriggerAnimation(true), 0); // Re-trigger animation
    };

    // $(".inp").keyup(function () {
    //     $(this).next().addClass("active-label")
    // }).focusin(function () {
    //     $(this).next().addClass("active-label")
    // }).focusout(function () {
    //     if ($(this).val() != "") {
    //         $(this).next().addClass("active-label")
    //     }
    //     else {
    //         $(this).next().removeClass("active-label")
    //     }
    // })
    
    
    // function signIn() {
    //     document.querySelector(".white-area").style.animationName = "animas1";
    //     document.querySelector(".black-area").style.animationName = "";
    // }
    // function signUp() {
    //     document.querySelector(".black-area").style.animationName ="animas";
    //     document.querySelector(".white-area").style.animationName ="";
    // }
    return (
        <div className="common-area center">
            <div className={`black-area area ${!isSigningIn && triggerAnimation ? 'animate-signup' : ''}`}>
            <section className="section-sign section-signin center">
                    <div className="form-group">
                        <input type="text" className="inp inp-username" />
                        <label for="" className="label label-username">Username</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name="" className="inp inp-password" />
                        <label for="" className="label label-password">Password</label>
                    </div>
                    <p className="txt-sign txt-signin center">Don't have an account? <button onClick={signIn}>Sign up</button> </p>
                    <button className="btn btn-sign btn-signin center" >Sign in</button>
                </section>
            </div>
            <div className={`white-area area ${isSigningIn && triggerAnimation ? 'animate-signin' : ''}`}>
                <section className="section-sign section-signup center">
                    <div className="form-group">
                        <input type="text" className="inp inp-username" />
                        <label for="" className="label label-username">Username</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name="" className="inp inp-password" />
                        <label for="" className="label label-password">Password</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name="" className="inp inp-password repass" />
                        <label for="" className="label label-password">Confirm password</label>
                    </div>
                    <p className="txt-sign txt-signup center">Already have an account?<button onClick={signUp}>Sign in</button> </p>
                    <button className="btn btn-sign btn-signup center" >Sign up</button>
                </section>
            </div>
        </div>
    )
}

export default LoginPage