

import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authAction";

export default function Login() {
  const { error, loading, patient, data, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "aarti",
    password: "123",
  });
  const handleSubmit = async () => {
    try {
      
      const result = dispatch(loginUser(loginData));
      console.log(result,"rsl");
      
      // if (result && result.payload) {
      //   const userRole = result.payload.roles; // Adjust based on your API response
      //   if (userRole === "admin") {
      //     navigate("/home");
      //   } else if (userRole === "user") {
      //     navigate("/users");
      //   }
      // }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (user) {
  //     const userRole = user.roles;
  //     if (userRole === "admin") {
  //       navigate("/home");
  //     } else if (userRole === "user") {
  //       navigate("/users");
  //     }
  //   }
  // }, [user, navigate]);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">
                    First name
                  </label>
                  <input
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter Your name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary w-100 mt-3"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p class="text-center mt-3">
                  Dont Have Account? <a href="#">Create Account</a>
                </p>
                <p class="text-center mt-3">
                  <Link to="/">Forget Password</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
