import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="row container">
            <div className="col-md-6 col-lg-4">
                <h1>Sign up</h1>
                <input placeholder="username"
                    className="form-control mb-2" />
                <input placeholder="password" type="password"
                    className="form-control mb-2" />
                <Link to="/Kanbas/Account/Profile"
                    className="btn btn-primary w-100 mb-3"> Sign up </Link><br />
                <Link to="/Kanbas/Account/Signin">Sign in</Link>
            </div>
        </div>
    );
}