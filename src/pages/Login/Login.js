import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";
// import useTitle from "../../shared/useTitle";
const Login = () => {
  //   useTitle("Login");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleProvider, logInUser } = useContext(AuthContext);
  const googleNewProvider = new GoogleAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setLoginError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleGoogleSignIn = () => {
    googleProvider(googleNewProvider)
      .then((res) => {
        const { email, displayName, photoURL } = res.user;
        const loggedInUser = {
          fullName: displayName,
          photoURL,
          email,
          userType: "buyer",
          phoneNumber: "",
          isVerified: false,
        };

        fetch("https://laptop-mart-server-rho.vercel.app/addUsers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        setLoginError("");
        navigate(from, { replace: true });
      })

      .catch((err) => {
        setLoginError(err.message);
      });
  };

  return (
    <div className="container mx-auto py-5">
      <div className="row">
        <div className="col-md-6  mx-auto">
          <form onSubmit={handleLogin} className="border p-3">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-semibold"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div>
              <p className="text-center text-danger">
                {!loginError
                  ? ""
                  : loginError.substring(22, loginError.length - 2)}
              </p>
            </div>
            <div className="mb-3 text-center">
              New in Tech Guru? Please <Link to="/register">Register Now</Link>{" "}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>
          <p className="text-center mt-3">
            ______ or use any options below ______
          </p>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline-primary"
            >
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
