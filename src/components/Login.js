import React from "react";
import nbgimg from "./img/blob-scene-haikei.png";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = (props) => {
  const [Cred, setCred] = useState({Email : "" , Password : ""})

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({Email : Cred.Email , Password : Cred.Password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success == true)
    {
      //redirect
      localStorage.setItem('token' , json.authtoken)
      navigate("/")
    }
    else
    {
      alert("Invalid Login Cred")
      console.log("Invalid Login Cred")
    }

  };

  const Onchange=(e)=>{
    setCred({...Cred , [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${nbgimg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-4">
              Login to your Account using Your Correct Username and Password
              <br />
              <br />
              <Link to="/createuser">
                <a className="label-text-alt link link-hover">
                  Not a User ! Register?
                </a>
              </Link>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={Cred.Email}
                  name="Email"
                  onChange={Onchange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  value={Cred.Password}
                  name="Password"
                  onChange={Onchange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handlesubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
