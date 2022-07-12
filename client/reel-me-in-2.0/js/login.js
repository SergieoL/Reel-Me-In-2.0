import React from 'react';
import loginpic from " ../images/login.svg";

const Login = () => {
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                <div className="signin-content">

                    <div className="signin-image">
                        <figure>
                            <img src={loginpic} alt="Login pic" />
                        </figure>
                        <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form">

                            <div className="form-group">
                                <label htmlFor="name"></label>
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    placeholder="Your Name"
                                />
                            </div>    


                    </div>
            </section>
    )
}