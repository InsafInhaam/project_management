import React from "react";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: passwordValidate,
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
                <h1 className="h2">Reset 👋</h1>
                <p className="lead">Enter new password</p>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      {...formik.getFieldProps("password")}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Repeat Password"
                      name="confirm_pwd"
                      {...formik.getFieldProps("confirm_pwd")}
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    role="button"
                    type="submit"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
