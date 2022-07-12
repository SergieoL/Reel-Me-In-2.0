import React from "react";
import signpic from "../images/signup.svg";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
