import React from "react";
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import { registerValidate } from "../helper/validate";

const Register = () => {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <>
      <div className="main-container fullscreen">
        <Toaster position="top-center" reverseOrder="false"></Toaster>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="text-center">
                <h1 className="h2">Create account</h1>
                <p className="lead">
                  Start doing things for free, in an instant
                </p>
                <button className="btn btn-lg btn-block btn-primary">
                  <img
                    alt="Google"
                    src="assets/img/logo-google.svg"
                    className="rounded align-top mr-2"
                  />
                  Continue with Google
                </button>
                <hr />
                <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      {...formik.getFieldProps('firstname')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      {...formik.getFieldProps('lastname')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                      name="create-account-email"
                      {...formik.getFieldProps('email')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="create-account-password"
                      {...formik.getFieldProps('password')}
                    />
                    <div className="text-left">
                      <small>
                        Your password should be at least 8 characters
                      </small>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    role="button"
                    type="submit"
                  >
                    Create account
                  </button>
                  <small>
                    By clicking 'Create Account' you agree to our
                    <a href="#"> Terms of Use</a>
                  </small>
                  <br />
                  <small>Have an account already? <Link to="/login">Login</Link>
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

export default Register;
