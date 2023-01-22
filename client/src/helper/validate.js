import { toast } from "react-hot-toast";

export async function registerValidate(values) {
  const errors = registerVerify({}, values);
  passwordVerify(errors, values);

  return errors;
}

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not match");
  }

  return errors;
}

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("Password is required");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrond Password");
  } else if (values.password.length < 8) {
    error.password = toast.error("Password must be at least 8 characters");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special characters");
  }

  return error;
}

// validate register form
function registerVerify(error = {}, values) {
  if (!values.firstname) {
    error.email = toast.error("First Name is required");
  } else if (!values.lastname) {
    error.email = toast.error("Last Name is required");
  } else if (!values.email) {
    error.email = toast.error("Email is required");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address");
  }

  return error;
}
