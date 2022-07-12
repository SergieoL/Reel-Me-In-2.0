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
                  <label htmlFor="name">
                    < i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                  placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off"
                  placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input type="phone" name="phone-in -talk" id="phone" autoComplete="off"
                  placeholder="Your Phone"
                  />
                </div>

                


                    </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
