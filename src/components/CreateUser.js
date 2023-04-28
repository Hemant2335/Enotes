import React ,{useState } from "react";
import nbgimg from './img/blob-scene-haikei.png';
import { Link , useNavigate} from 'react-router-dom';
import Alert from "./Alert";
const Login = (props) => {


  const [Cred, setCred] = useState({Name:"" , Email : "" , Password : ""})

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/v1/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({Email : Cred.Email , Password : Cred.Password ,Name : Cred.Name })
    });
    const json = await response.json();
    console.log(json);
    if (json.success == true)
    {
      localStorage.setItem('token' , json.authtoken)
      navigate("/")
    }
    else
    {
      alert("Email Already Exits" , "warning")
    }

  };


  const Onchange=(e)=>{
    setCred({...Cred , [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="hero min-h-screen " style={{ backgroundImage: `url(${nbgimg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Account!</h1>
            <p className="py-6">
              Enter the Required Details to Complete Creating your Account.
              <br /><br /><br /><br /><br /><br />
              <Link to = "/login"><a className="label-text-alt link link-hover">Already a User?</a></Link>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="Name"
                  onChange={Onchange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
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
                  name="Password"
                  onChange={Onchange}
                  minLength={5}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handlesubmit}>Create User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
