import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount, dirtyFields },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const required = (input) => {
    return (
      <>
        <div className="alert alert-danger text-danger mt-2">
          {input} is required
        </div>
      </>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="w-50 p-5 m-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                {...register("username", {
                  required: true,
                  pattern:
                    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                })}
                className="form-control"
                placeholder="Enter username"
                style={{
                  borderColor: errors.username
                    ? "red"
                    : submitCount > 0 && dirtyFields.username
                    ? "green"
                    : "gray",
                }}
              />
              {errors.username?.type === "required" && required("Username")}
              {errors.username?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Username should validate the pattern
                  <ul>
                    <li>8-20 characters long</li>
                    <li>contains characters and numbers</li>
                    <li>no _ or . at the beginning</li>
                    <li>no __ or _. or ._ or .. inside</li>
                    <li>no _ or . at the end</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
                className="form-control"
                placeholder="Enter email"
                style={{
                  borderColor: errors.email
                    ? "red"
                    : submitCount > 0 && dirtyFields.email
                    ? "green"
                    : "gray",
                }}
              />
              {errors.email?.type === "required" && required("Email")}
              {errors.email?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Email must match pattern: email@dom.com
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                className="form-control"
                placeholder="Enter password"
                type="password"
                style={{
                  borderColor: errors.password
                    ? "red"
                    : submitCount > 0 && dirtyFields.password
                    ? "green"
                    : "gray",
                }}
              />
              {errors.password?.type === "required" && required("Password")}
              {errors.password?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  <h6 className="text-danger">
                    Password should contain at least:
                  </h6>
                  <ul>
                    <li>Eight characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One number</li>
                    <li>One special character</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="remember"
                  {...register("rememberMe")}
                />
                <label className="custom-control-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="">Forgot password?</a>
            </p>
          </form>
        </Card>
      </div>
    </>
  );
}

export default LoginPage;
