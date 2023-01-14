import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = form.userType.value;
    const phoneNumber = form.phoneNumber.value;

    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL,
        });
        const user = res.user;

        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });

    const loggedInUser = {
      fullName,
      photoURL,
      email,
      userType: "admin",
      phoneNumber,
      isVerified: false,
    };
    console.log(loggedInUser);
    fetch("http://localhost:5000/addUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loggedInUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <form
          onSubmit={handleRegisterUser}
          className="col-md-6 mx-auto border p-3"
        >
          <div className="d-flex">
            <div className="mb-3 w-75 me-2">
              <label
                htmlFor="exampleInputFullName"
                className="form-label fw-semibold"
              >
                Full name
              </label>
              <input
                name="fullName"
                type="text"
                className="form-control"
                id="exampleInputFullName"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                User Type
              </label>
              <select
                name="userType"
                className="form-select form-select-sm "
                aria-label=".form-select-sm example"
              >
                <option defaultValue value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>
          <div className="mb-3 ">
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Image URL
            </label>
            <input
              name="photoURL"
              type="text"
              className="form-control"
              id="exampleInputImg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              type="text"
              className="form-control"
              id="exampleInputIm"
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
            />
          </div>
          <div className="mb-3 text-center">
            Already have an account? <Link to="/login">Login Now</Link>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
