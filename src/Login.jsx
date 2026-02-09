import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("aditya3@gmail.com");
  const [password, setPassword] = useState("Qwert@123");

  const handleLogin = async () => {
    try {
      const res = axios.post("http://localhost:3000/login", {
        emailId,
        password,
      },{withCredentials:true}); 
    } catch (err) {
      console.log("ERROR: " + err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="flex flex-col">
            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-boarded w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-boarded w-full max-w-xs"
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
