import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

const signin = async () => {
    try {
        console.log("Payload being sent to server:", credentials); // Debug
        const user = await client.signin(credentials);
        if (!user) {
            console.error("No user returned from server");
            return;
        }
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    } catch (error: any) {
        console.error("Signin failed:", error.response?.data?.message || error.message);
        alert("Signin failed: " + (error.response?.data?.message || "Please try again"));
    }
};


  return (
    <div id="wd-signin-screen" className="row container">
      <div className="col-md-6 col-lg-4">
        <h1>Sign in</h1>
        <input value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="form-control mb-2" placeholder="username" id="wd-username" />
        <input value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
        <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
        <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
      </div>
    </div>
  );
}
