import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="main-container fullscreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="text-center">
                <h1 className="h2">Recovery 😫</h1>
                <p className="lead">Enter OTP to recover password</p>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="OTP"
                      name="forgot-password-email"
                    />
                    <small>Enter 6 digit OTP sent to your email address</small>
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    role="button"
                    type="submit"
                  >
                    Recover
                  </button>
                  <small>
                    Can't get OTP
                    <a href="#"> Resend</a>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;