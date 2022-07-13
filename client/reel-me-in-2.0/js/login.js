import React from 'react';
import loginpic from " ../images/login.svg";
import { NavLink } from "react-router-dom";
import Loginform from "./Loginform";

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
                        <Loginform />

                           
                            </div>   
                        </form>
                    </div>    
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Login