import React from "react";
import simg from "./img/7309681.jpg";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = (props) => {

  const navigate = useNavigate();

  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }

  const handleclick = async () => {
    console.log("I am Running");
    const response = await fetch(`http://localhost:5000/api/v1/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    props.setprofile({
      Name: json.Name,
      Email: json.Email,
      Date: json.Date,
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to="/"><li><a href = "/">Home</a></li></Link>
        <Link to="/login"><li><a href = "/">Login</a></li></Link>
        <Link to="/about"><li><a href = "/">About</a></li></Link>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/"><a href = "/" className="btn btn-ghost normal-case text-xl">Enotes</a></Link>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={simg} alt = "img" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to="/yournotes"><li><a href = "/">Notes</a></li></Link>
        {!localStorage.getItem('token')?null:<Link to="/yourprofile" onClick={()=>handleclick()}><li><a href = "/">Profile</a></li></Link>}
        {!localStorage.getItem('token')?<Link to="/login"><li><a href = "/">Login</a></li></Link>:<li><a onClick={handlelogout}>Logout</a></li>}
      </ul>
    </div>
      </div>
    </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
