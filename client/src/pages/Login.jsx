import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../helper/validate";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="main-container fullscreen">
        <Toaster position="top-center" reverseOrder="false"></Toaster>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="text-center">
                <h1 className="h2">Welcome Back 👋</h1>
                <p className="lead">Log in to your account to continue</p>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                      name="login-email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="login-password"
                    />
                    <div className="text-right">
                      <small>
                        <Link to="/forgotpassword">Forgot password?</Link>
                      </small>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    role="button"
                    type="submit"
                  >
                    Log in
                  </button>
                  <small>
                    Don't have an account yet?{" "}
                    <Link to="/register">Create one</Link>
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

export default Login;
