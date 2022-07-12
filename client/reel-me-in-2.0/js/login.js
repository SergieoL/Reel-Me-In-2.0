import React from 'react';
import loginpic from " ../images/login.svg";

const Login = () => {
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5"></div>
                <div className="signin-content"></div>

                    <div className="signin-image">
                        <figure>
                            <img src={loginpic} alt="Login pic" />
                        </figure>
                        <NavLink to="/signup" className="signup-image-link">Create an A</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form">

                            
                    </div>
            </section>
    )
}